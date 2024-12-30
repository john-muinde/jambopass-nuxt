<script setup>
import { Link } from '@inertiajs/vue3';
import { TransitionRoot } from '@headlessui/vue';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import lightGallery from 'lightgallery';

// Import all required plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';

// Import all required CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-share.css';

const props = defineProps({
    event: {
        type: Object,
        default: {}
    },
    getEventTickets: {
        type: Function,
        default: (event) => console.log(event)
    }
});

const activeSlideIndices = ref({});
const event = props.event;
const galleryRef = ref(null);
let gallery = null;
// Computed property to truncate description based on word count
const truncatedDescription = computed(() => {
    const words = props.event.description.split(' '); // Split description into words
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : props.event.description; // Adjust the number 20 as needed
});

// Variables to track touch positions
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
    touchEndX = event.touches[0].clientX;
};

const handleTouchEnd = (e) => {
    if (!event.id) return;

    if (touchStartX - touchEndX > 50) {
        // Swipe left
        activeSlideIndices.value[event.id] = (activeSlideIndices.value[event.id] + 1) % event.images.length;
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        activeSlideIndices.value[event.id] = (activeSlideIndices.value[event.id] - 1 + event.images.length) % event.images.length;
    }
};

const initGallery = () => {
    if (galleryRef.value) {
        gallery = lightGallery(galleryRef.value, {
            plugins: [
                lgZoom,
                lgThumbnail,
                lgAutoplay,
                lgFullscreen,
                lgRotate,
                lgShare
            ],
            speed: 500,
            dynamic: true,
            dynamicEl: event.images.map(image => ({
                src: image,
                thumb: image
            })),
            // Core settings
            mode: 'lg-fade',
            preload: 3,
            escKey: true,
            keyPress: true,

            // Controls settings
            controls: true,
            mousewheelControl: true,
            hideControlOnEnd: false,

            // Zoom settings
            zoomFromOrigin: true,
            zoom: true,
            scale: 1,

            // Thumbnail settings
            thumbnail: true,
            animateThumb: true,
            showThumbByDefault: true,
            thumbWidth: 100,
            thumbHeight: '80px',

            // Autoplay settings
            autoplay: true,
            autoplayControls: true,
            autoplayTimeout: 5000,
            progressBar: true,

            // Fullscreen settings
            fullScreen: true,

            // Rotate settings
            rotate: true,
            rotateLeft: true,
            rotateRight: true,
            flipHorizontal: true,
            flipVertical: true,

            // Share settings
            share: true,
            facebook: true,
            twitter: true,
            pinterest: true,
            copy: true,


            // Mobile settings
            mobileSettings: {
                controls: true,
                showCloseIcon: true,
                download: false,
                rotate: true,
                rotateLeft: false,
                rotateRight: true,
                flipHorizontal: false,
                flipVertical: true,
                fullScreen: false
            }
        });

        // Gallery events
        // gallery.on('afterOpen', () => {
        //     console.log('Gallery opened');
        // });

        // gallery.on('rotateLeft', () => {
        //     console.log('Image rotated left');
        // });

        // gallery.on('rotateRight', () => {
        //     console.log('Image rotated right');
        // });
    }

};

const viewGallery = (index = 0) => {
    if (gallery) {
        gallery.openGallery(index);
    }
};

// Auto-slide functionality for the card preview
const startAutoSlide = () => {
    setInterval(() => {
        const currentIndex = activeSlideIndices.value[event.id] || 0;
        if (event) {
            activeSlideIndices.value[event.id] = (currentIndex + 1) % event.images.length;
        }
    }, 5000);
};

// Initialize component
onMounted(() => {
    activeSlideIndices.value[event.id] = 0;
    startAutoSlide(event.id);
    initGallery();
});

// Cleanup
onBeforeUnmount(() => {
    if (gallery) {
        gallery.destroy();
    }
});

</script>
<template>
    <div class="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
        :data-id="event.id">
        <!-- Hidden container for lightgallery -->
        <div ref="galleryRef" class="hidden"></div>

        <!-- Image Slider -->
        <div class="relative h-48 overflow-hidden cursor-pointer" @touchstart="handleTouchStart"
            @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="viewGallery(activeSlideIndices[event.id])">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <TransitionRoot v-for="(image, index) in event.images" :key="index"
                :show="index === activeSlideIndices[event.id]" enter="transition-opacity duration-300"
                enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity duration-300"
                leave-from="opacity-100" leave-to="opacity-0">
                <img :src="image" :alt="event.title"
                    class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy" />
            </TransitionRoot>

            <!-- Slide Indicators -->
            <div class="absolute bottom-2 left-0 right-0 flex justify-center z-20">
                <button v-for="(_, index) in event.images" :key="index"
                    @click.stop="activeSlideIndices[event.id] = index"
                    class="w-2 h-2 rounded-full mx-1 transition-all duration-300"
                    :class="index === activeSlideIndices[event.id] ? 'bg-white scale-125' : 'bg-white/50'" />
            </div>

            <!-- Gallery Icon with Counter -->
            <div class="absolute top-2 right-2 z-20">
                <button @click.stop="viewGallery(activeSlideIndices[event.id])"
                    class="px-3 py-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors duration-300 flex items-center space-x-2">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-white text-sm">{{ event.images.length }}</span>
                </button>
            </div>
        </div>

        <!-- Card Content -->
        <div class="p-6">
            <div class="flex items-center justify-between mb-3">
                <div className="bg-blue-500 backdrop-blur-sm bg-opacity-90 rounded-lg p-2 shadow-lg">
                    <div className="text-white text-xs font-medium">{{ event.eventDate }}</div>
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ event.remainingTickets }} tickets left
                </div>
            </div>

            <Link
                class="text-xl mb-2 text-gray-900 dark:text-white font-bold transition duration-300 hover:text-orange-900 cursor-pointer"
                as="h3" :href="route('events.show', { id: event.id })">
            {{ event.title }}
            </Link>


            <Link class="text-gray-600 dark:text-gray-300 text-sm transition duration-300 hover:text-blue-600"
                :href="route('events.show', { id: event.id })">
            {{ truncatedDescription }}
            </Link>

            <div className="space-y-2 mb-4 mt-2">
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" />
                    </svg>
                    7:00 PM - 10:00 PM
                </div>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {{ event.location.name }}
                </div>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg class="w-4 h-4 mr-1 " fill="currentColor" stroke="currentColor" viewBox="0 0 512 512">

                        <g>
                            <path class="st0"
                                d="M147.57,320.188c-0.078-0.797-0.328-1.531-0.328-2.328v-6.828c0-3.25,0.531-6.453,1.594-9.5
                                            c0,0,17.016-22.781,25.063-49.547c-8.813-18.594-16.813-41.734-16.813-64.672c0-5.328,0.391-10.484,0.938-15.563
                                            c-11.484-12.031-27-18.844-44.141-18.844c-35.391,0-64.109,28.875-64.109,73.75c0,35.906,29.219,74.875,29.219,74.875
                                            c1.031,3.047,1.563,6.25,1.563,9.5v6.828c0,8.516-4.969,16.266-12.719,19.813l-46.391,18.953
                                            C10.664,361.594,2.992,371.5,0.852,383.156l-0.797,10.203c-0.406,5.313,1.406,10.547,5.031,14.438
                                            c3.609,3.922,8.688,6.125,14.016,6.125H94.93l3.109-39.953l0.203-1.078c3.797-20.953,17.641-38.766,36.984-47.672L147.57,320.188z" />
                            <path class="st0"
                                d="M511.148,383.156c-2.125-11.656-9.797-21.563-20.578-26.531l-46.422-18.953
                                    c-7.75-3.547-12.688-11.297-12.688-19.813v-6.828c0-3.25,0.516-6.453,1.578-9.5c0,0,29.203-38.969,29.203-74.875
                                    c0-44.875-28.703-73.75-64.156-73.75c-17.109,0-32.625,6.813-44.141,18.875c0.563,5.063,0.953,10.203,0.953,15.531
                                    c0,22.922-7.984,46.063-16.781,64.656c8.031,26.766,25.078,49.563,25.078,49.563c1.031,3.047,1.578,6.25,1.578,9.5v6.828
                                    c0,0.797-0.266,1.531-0.344,2.328l11.5,4.688c20.156,9.219,34,27.031,37.844,47.984l0.188,1.094l3.094,39.969h75.859
                                    c5.328,0,10.406-2.203,14-6.125c3.625-3.891,5.438-9.125,5.031-14.438L511.148,383.156z" />
                            <path class="st0" d="M367.867,344.609l-56.156-22.953c-9.375-4.313-15.359-13.688-15.359-23.969v-8.281
                                        c0-3.906,0.625-7.797,1.922-11.5c0,0,35.313-47.125,35.313-90.594c0-54.313-34.734-89.234-77.594-89.234
                                        c-42.844,0-77.594,34.922-77.594,89.234c0,43.469,35.344,90.594,35.344,90.594c1.266,3.703,1.922,7.594,1.922,11.5v8.281
                                        c0,10.281-6.031,19.656-15.391,23.969l-56.156,22.953c-13.047,5.984-22.344,17.984-24.906,32.109l-2.891,37.203h139.672h139.672
                                        l-2.859-37.203C390.211,362.594,380.914,350.594,367.867,344.609z" />
                        </g>
                    </svg>
                    150 attendees expected
                </div>
            </div>



            <!-- Tags  -->
            <div className="flex flex-wrap gap-2 mb-4">
                <span
                    className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    Featured
                </span>
                <span
                    className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                    Limited Seats
                </span>
            </div>

            <!-- Progress Bar -->
            <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div class="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                    :style="`width: ${(event.remainingTickets / event.totalTickets) * 100}%`" />
            </div>

            <button @click="getEventTickets(event)" class="w-full group relative inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg
                                hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
                <span class="mr-2">Get Ticket</span>
                <svg class="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</template>