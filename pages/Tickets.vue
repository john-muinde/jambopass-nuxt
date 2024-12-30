<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

</script>
<template>
    <GuestLayout>
        <!-- Event Cards -->
        <div class="flex flex-col items-center justify-center px-4 py-2 h-full text-center">
            <img src="tickets.png" alt="Tickets" class="max-w-xs mb-4" v-if="$page.props.auth.user == null">
            <button class="px-3 py-2 dark:text-white text-black" v-if="$page.props.auth.user == null">
                <h1 class="font-bold text-3xl">Your Tickets will display here!</h1>
                <h1 class="font-bold text-1xl">You haven't logged in yet...</h1>
                <br><br>
                <span class="hover:bg-slate-400 hover:bg-opacity-5 px-2 py-3 rounded-lg">
                    Log into account
                </span>
            </button>
        </div>
    </GuestLayout>
</template>
