<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import CardSkeleton from '@/Components/CardSkeleton.vue';
import EventCard from '@/Components/EventCard.vue';
import { ref, computed, onMounted } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import EventTicketsModal from '@/Components/EventTicketsModal.vue';
import showToast from '@/utils/notification';
import SearchEvents from '@/Components/SearchEvents.vue';
import EventsCategoriesErrorState from '@/Components/EventsCategoriesErrorState.vue';
import NoCategories from '@/Components/NoCategories.vue'
import NoEvents from '../Components/NoEvents.vue'

const selectedCategory = ref(0);
const selectedEvent = ref(null);
const isLoading = ref(true);
const currentPage = ref(1);
const itemsPerPage = 8;
const error = ref(null);


const events = ref([]);
const allEvents = ref([]);
const categories = ref([]);

const ticketsModal = (event) => {
    selectedEvent.value = event;
};

// Load more functionality
const loadMoreEvents = async () => {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 1000));
    currentPage.value++;
    isLoading.value = false;
};

// Computed property for pagination
const paginatedEvents = computed(() => {
    return events.value.slice(0, currentPage.value * itemsPerPage);
});

const hasMoreEvents = computed(() => {
    return currentPage.value * itemsPerPage < events.value.length;
});


// Function to fetch events and categories concurrently with retry logic
async function fetchEventsAndCategories(category = 0) {
    isLoading.value = true;
    error.value = null;

    try {
        const [eventsResponse, categoriesResponse] = await Promise.all([
            window.axios.get('https://jambopass.com/apis/events/get-events.php', {
                withCredentials: false,
            }),
            window.axios.get('/api/events')
        ]);

        events.value = eventsResponse.data.events;
        allEvents.value = eventsResponse.data.events;
        categories.value = categoriesResponse.data.categories;

        allEvents.value.forEach(element => {
            // adding available to all
            element.tickets.forEach(ticket => {
                ticket.available = element.available;
            });
        });

        if (category !== 0) {
            events.value = events.value.filter(e => e.categoryId == category
            );
        }

        showToast("Data fetched successfully!", "success");
    } catch (err) {
        console.error("Error fetching data:", err);
        error.value = {
            title: 'Unable to load data',
            message: err.response?.status === 404
                ? 'The requested data could not be found. Please try again later.'
                : 'There was a problem loading the data. Please check your connection and try again.',
            code: err.response?.status || 'UNKNOWN'
        };
        showToast("Error fetching data!", "error");
    } finally {
        isLoading.value = false;
    }
}

onMounted(async () => {
    fetchEventsAndCategories();
});

const selectCategory = (num) => {
    selectedCategory.value = num;
    if (num == 0) {
        events.value = allEvents.value;
        return;
    }
    events.value = allEvents.value.filter(e => e.categoryId == num);
};
</script>

<template>
    <GuestLayout>
        <!-- Hero Section -->
        <div
            class="relative bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-600 dark:to-yellow-800 p-8 mb-8">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl font-bold text-white mb-4">Discover Amazing Events</h1>
                <p class="text-white/90 text-lg mb-6">Find and book tickets for the hottest events in your area</p>
                <div class="relative max-w-md mx-auto">
                    <!-- Search Results Dropdown -->
                    <SearchEvents />
                </div>
            </div>
        </div>

        <!-- Error State -->
        <EventsCategoriesErrorState :error="error" :fetchEventsAndCategories="fetchEventsAndCategories" />

        <!-- Categories Navigation -->
        <nav class="p-4 sticky top-8 bg-white dark:bg-gray-900 z-40 shadow-md">
            <h2 class="text-xl mb-2 font-semibold">Popular Events</h2>
            <div class="flex justify-start lg:justify-center overflow-x-auto scrollbar-none">
                <!-- Loading Skeletons -->
                <template v-if="isLoading">
                    <CardSkeleton v-for="n in 8" :key="n" :class="['w-20 h-20 mr-1']" />
                </template>

                <template v-else>
                    <!-- No Categories Found -->
                    <NoCategories v-if="!categories.length && !error"
                        :fetchEventsAndCategories="fetchEventsAndCategories" :isLoading="isLoading" />

                    <TransitionRoot v-else :show="true" v-for="category in categories" :key="category.id" appear
                        enter="transition-all duration-300" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100">
                        <button @click="selectCategory(category.id)" :class="[
                            'flex items-center justify-center p-3 w-20 h-20 text-sm flex-col mr-2',
                            'transition-all duration-300 hover:scale-105',
                            category.id === selectedCategory
                                ? 'bg-yellow-500 text-white rounded-2xl shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 rounded-xl'
                        ]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6 mb-2"
                                :class="category.id === selectedCategory ? 'text-white' : 'text-yellow-500'" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    :d="category.icon" />
                            </svg>
                            <span class="truncate px-2">{{ category.name }}</span>
                        </button>
                    </TransitionRoot>
                </template>

            </div>
        </nav>

        <!-- Event Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            <!-- Loading Skeletons -->
            <template v-if="isLoading">
                <CardSkeleton v-for="n in 8" :key="n" />
            </template>

            <template v-else>
                <!-- No Events Found -->
                <NoEvents v-if="!paginatedEvents.length && !error"
                    :fetchEventsAndCategories="() => fetchEventsAndCategories(selectedCategory)" :isLoading="isLoading"
                    :refreshHome="() => selectCategory(0)" />

                <!-- Event Cards -->
                <TransitionRoot :show="true" v-else v-for="(event, index) in paginatedEvents" :key="event.id" appear
                    enter="transition-all duration-500" enter-from="opacity-0 translate-y-4"
                    enter-to="opacity-100 translate-y-0"
                    :class="{ 'mb-10': index === paginatedEvents.length - 1 && !isLoading && !hasMoreEvents }">
                    <EventCard :event="event" :key="event.id" :getEventTickets="ticketsModal" />
                </TransitionRoot>
            </template>


        </div>


        <!-- Load More Button -->
        <div class="flex justify-center p-6" v-if="!isLoading && hasMoreEvents">
            <button @click="loadMoreEvents" class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg
                    hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 mb-10">
                Load More Events
            </button>
        </div>

        <EventTicketsModal :event="selectedEvent" :show="selectedEvent != null" :ticketsModal="ticketsModal" />
    </GuestLayout>
</template>