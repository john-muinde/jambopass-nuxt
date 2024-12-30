<script setup>
import { ref, onMounted, watch } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import ProfileDropDown from '@/Components/ProfileDropDown.vue';
import { useLocalStorage } from '@vueuse/core';

// manage theme current user preference, light and dark
const theme = useLocalStorage('theme', 'system');
const isDarkMode = ref(false);

const updateTheme = () => {
    if (theme.value === 'system') {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        isDarkMode.value = theme.value === 'dark';
    }

    document.documentElement.classList.toggle('dark', isDarkMode.value);
};

const toggleTheme = () => {
    theme.value = isDarkMode.value ? 'light' : 'dark';
    updateTheme();
};

watch(theme, updateTheme);

// Array of navigation items
const navItems = ref([
    { label: 'Home', route: 'home' },
    { label: 'Search', route: 'search.index' },
    { label: 'My Tickets', route: 'profile.tickets' },
    { label: 'Profile', route: 'profile.index' },
]);

onMounted(() => {
    updateTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
});
</script>

<template>

    <Head title="Welcome" />
    <div class="min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-white text-gray-900">
        <!-- Header -->
        <header
            class="flex justify-between items-center p-4 w-full z-50 top-[-1px] start-0 sticky dark:bg-gray-800 backdrop-blur-lg bg-white/50">
            <Link class="text-2xl font-bold" :href="route('home')">
            <span class="text-yellow-500">j</span>
            <span class="text-blue-500">P</span>
            </Link>
            <div class="flex items-center space-x-4">
                <!-- My Tickets -->
                <Link class="rounded-full p-2 md:flex hidden flex-row" :href="route('profile.tickets')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-1" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                My Tickets
                </Link>
                <!-- Search Button -->
                <Link class="rounded-full p-1 md:flex hidden flex-row" :href="route('search.index')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </Link>

                <!-- Dark Mode -->
                <button @click="toggleTheme" class="p-2 rounded-full text-yellow-500">
                    <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>

                <!-- Profile Page -->
                <ProfileDropDown />
            </div>
        </header>
        <main> <!-- Added overflow-auto to main for scrolling if needed -->
            <slot />
        </main>
        <!-- Mobile Navigation -->
        <nav
            class="fixed rounded-full bottom-3 mx-1 left-0 right-0 p-1 flex justify-around items-center md:hidden bg-transparent border-gray-200 backdrop-blur-md">
            <button v-for="(item, index) in navItems" :key="index"
                class="flex flex-col items-center p-1 rounded-lg transition-colors duration-300" :class="{
                    'text-yellow-500 border-yellow-500': route().current(item.route)
                }" @click="() => { $inertia.visit(route(item.route)); }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    <path v-else-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-xs mt-1">{{ item.label }}</span>
            </button>
        </nav>
    </div>
</template>
