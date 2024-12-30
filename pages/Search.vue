<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';

import SearchEvents from '@/Components/SearchEvents.vue';

const props = defineProps({
    query: String
});

</script>
<template>
    <GuestLayout>
        <!-- Event Cards -->
        <div class="relative items-center px-2 py-2 h-full text-center  ">

            <div class=" relative max-w-md mx-auto">
                <SearchEvents />
            </div>
            <img src="search.png" alt="" class="max-w-xs mb-4 mx-auto">
            <p class="px-3 py-2 dark:text-white text-black" v-if="$page.props.auth.user == null">
                <span class="font-bold text-3xl block">Search For events Here!</span>

                <span class="font-bold text-xl inline-block">Search using the events name,link or location</span>
                <span v-if="props.query != null && props.query != ''">
                    Showing Results for: {{ props.query }}
                </span>
            </p>
        </div>
    </GuestLayout>
</template>