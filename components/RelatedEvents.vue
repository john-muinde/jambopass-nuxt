<script setup>
import { formatLocalDate } from '@/utils/functions';

const props = defineProps({
    event: {
        type: Object,
        required: true
    },
    getEventTickets: {
        type: Function,
        required: true
    }
});
</script>

<template>
    <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48">
            <a :href="route('events.show', { id: event.id })">
                <img :src="event.images[0]" :alt="event.title" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                    <p class="text-white hover:text-orange-400 font-semibold">{{ event.name }}</p>
                </div>
            </a>
        </div>
        <div class="p-4">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <i class="fas fa-calendar-alt mr-2"></i>
                <span>{{ formatLocalDate(event.eventDate) }}</span>
            </div>
            <a :href="`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${event.location.id}`"
                target="_blank">
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 hover:text-orange-400">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    <span>{{ event.location.name }}</span>
                </div>
            </a>
            <button @click="getEventTickets(event)"
                class="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                Get Tickets
            </button>
        </div>
    </div>
</template>