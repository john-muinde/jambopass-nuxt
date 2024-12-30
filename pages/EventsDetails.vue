<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, onMounted, computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import { TransitionRoot } from '@headlessui/vue';
import EventTicketsModal from '@/Components/EventTicketsModal.vue';
import RelatedEvents from '@/Components/RelatedEvents.vue';
import showToast from '@/utils/notification';
import { useScriptTag } from '@vueuse/core';
import { formatLocalDate } from '@/utils/functions'; 

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const eventId = props.id;

const event = ref(null);
const isLoading = ref(true);
const error = ref(null);
const selectedEvent = ref(null);
const city = ref('')

// Hardcoded related events data
const relatedEvents = ref([]);

// Rich snippets data
const eventJsonLd = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.value?.name,
    description: event.value?.description,
    eventDate: event.value?.eventDate,
    location: {
        '@type': 'Place',
        name: event.value?.location?.name,
        address: {
            '@type': 'PostalAddress',
            addressLocality: event.value?.city || 'Nairobi',
            addressCountry: event.value?.country || 'Kenya'
        }
    },
    offers: {
        '@type': 'Offer',
        price: event.value?.tickets?.[0]?.price,
        priceCurrency: 'KES',
        availability: event.value?.ticketsAvailable ? 'InStock' : 'SoldOut',
        url: route('events.show', { id: eventId })
    },
    organizer: {
        '@type': 'Organization',
        name: event.value?.organizer,
        url: event.value?.organizerUrl
    },
    image: event.value?.images?.[0]
}));

const formatPrice = (price) => {
    return `Kshs. ${new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0
    }).format(price)}`;
};

const ticketsModal = (event) => {
    selectedEvent.value = event;
};

async function fetchEventDetails() {
    isLoading.value = true;
    error.value = null;

    try {
        const response = await window.axios.post(`https://jambopass.com/apis/events/search-events.php`, {
            "keywords": eventId,
            "single": true,
            "related": true
        });

        if (!response.data.event) {
            error.value = {
                title: 'Event not found',
                message: 'The requested event could not be found.',
                code: 404
            };
            return;
        }

        event.value = response.data.event;

        if (response.data.related_events) {
            relatedEvents.value = response.data.related_events;
        }

        showToast("Event details fetched successfully!", "success");

    } catch (err) {
        console.error("Error fetching event details:", err);
        error.value = {
            title: 'Unable to load event details',
            message: err.response?.status === 404
                ? 'The requested event could not be found.'
                : 'There was a problem loading the event details. Please try again.',
            code: err.response?.status || 'UNKNOWN'
        };
        showToast("Error fetching event details!", "error");
    } finally {
        isLoading.value = false;
    }
}



onMounted(() => {
    fetchEventDetails();
});

// Inject the JSON-LD script using useScriptTag
useScriptTag(
    '',
    () => { },
    {
        async: false,
        type: 'application/ld+json',
        content: JSON.stringify(eventJsonLd.value)
    }
);
</script>

<template>
    <GuestLayout>

        <Head>
            <title>{{ event?.name ? `${event?.name} Event Details` : 'Event Details' }}</title>
            <meta name="description" :content="event?.description?.substring(0, 160)">
            <meta property="og:title" :content="event?.name">
            <meta property="og:description" :content="event?.description?.substring(0, 160)">
            <meta property="og:image" :content="event?.images[0]">
            <meta property="og:type" content="event">
            <meta property="og:url" :content="route('events.show', { id: eventId })">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" :content="event?.name">
            <meta name="twitter:description" :content="event?.description?.substring(0, 160)">
            <meta name="twitter:image" :content="event?.images[0]">
            <meta name="keywords"
                :content="`${event?.name}, ${event?.category}, events, tickets, ${event?.location.name.split(',')[1]}`">
        </Head>
        <!-- Loading State -->
        <div v-if="isLoading" class="animate-pulse">
            <div class="h-96 bg-gray-200 dark:bg-gray-700 mb-8"></div>
            <div class="max-w-7xl mx-auto px-4">
                <div class="h-8 bg-gray-200 dark:bg-gray-700 w-3/4 mb-4"></div>
                <div class="h-4 bg-gray-200 dark:bg-gray-700 w-1/2 mb-8"></div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ error.title }}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8">{{ error.message }}</p>
            <button @click="fetchEventDetails"
                class="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                Try Again
            </button>
        </div>

        <!-- Event Details -->
        <article v-else class="pb-16">
            <!-- Hero Section -->
            <div class="relative h-96 mb-8">
                <img :src="event.images[0]" :alt="event.name" class="w-full h-full object-cover" loading="eager">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div class="max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
                        <div class="text-white">
                            <h1 class="text-4xl font-bold mb-2">{{ event.name }}</h1>
                            <div class="flex items-center space-x-4 text-sm">
                                <span>
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    {{ new Date(event.eventDate).toLocaleDateString() }}
                                </span>
                                <span>
                                    <i class="fas fa-map-marker-alt mr-2"></i>
                                    {{ event.location.name }}
                                </span>
                                <span>
                                    <i class="fas fa-ticket-alt mr-2"></i>
                                    From {{ formatPrice(event?.tickets[0].price) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Event Details -->
                    <div class="lg:col-span-2">
                        <section class="prose dark:prose-invert max-w-none mb-8">
                            <h1 class="font-bold">About This Event</h1>
                            <div v-html="event.description"></div>
                        </section>

                        <!-- Event Schedule -->
                        <section class="mb-8">
                            <h2 class="text-2xl font-bold mb-4">Schedule</h2>
                            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 class="font-semibold">Doors Open</h3>
                                        <p class="text-gray-600 dark:text-gray-400">
                                            {{ formatLocalDate(event.eventDate) }}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold">Event Ends</h3>
                                        <p class="text-gray-600 dark:text-gray-400">
                                            {{ formatLocalDate(event.eventDate) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- Sidebar -->
                    <div class="lg:col-span-1">
                        <!-- Ticket Information -->
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 top-24">
                            <h2 class="text-xl font-bold mb-4">Get Tickets</h2>
                            <div class="mb-4">
                                <p class="text-gray-600 dark:text-gray-400 mb-2">
                                    Starting from
                                </p>
                                <p class="text-3xl font-bold">{{ formatPrice(event?.tickets[0].price) }}</p>
                            </div>
                            <button @click="ticketsModal(event)" class="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg
                                           hover:bg-yellow-600 transition-colors">
                                Buy Tickets
                            </button>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                                {{ event.ticketsAvailable }} tickets remaining
                            </p>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 class="text-xl font-bold mb-4">Venue</h2>
                            <div class="mb-4">
                                <h3 class="font-semibold mb-2">{{ event.location.name }}</h3>
                                <p class="text-gray-600 dark:text-gray-400">{{ event.address }}</p>
                                <p class="text-gray-600 dark:text-gray-400">{{ event?.location.name.split(',')[1] }},
                                    Kenya
                                </p>
                            </div>

                            <!-- Google Maps Iframe -->
                            <iframe class="w-full h-64 rounded-lg shadow"
                                :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyAvxRwyjwEmimzLkSm1gwauBJ7Q2i2-WTo&q=place_id:${event.location.id}`"
                                allowfullscreen loading="lazy"></iframe>
                        </div>
                    </div>
                </div>

                <!-- Related Events -->
                <section v-if="relatedEvents.length" class="mt-16">
                    <h2 class="text-2xl font-bold mb-8">Similar Events You Might Like</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <TransitionRoot v-for="event in relatedEvents" :key="event.id" :show="true" appear
                            enter="transition-all duration-500" enter-from="opacity-0 translate-y-4"
                            enter-to="opacity-100 translate-y-0">
                            <RelatedEvents :event="event" :getEventTickets="ticketsModal" />
                        </TransitionRoot>
                    </div>
                </section>
            </div>
        </article>

        <!-- Tickets Modal -->
        <EventTicketsModal :event="selectedEvent" :show="selectedEvent != null" :ticketsModal="ticketsModal" />
    </GuestLayout>
</template>