<!-- AppLoader.vue -->
<template>
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
        <div class="flex flex-col items-center">
            <div class="w-12 h-12 mb-4 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            <p class="text-lg font-medium text-gray-700">Loading...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isLoading = ref(true)

const handleStart = () => {
    isLoading.value = true
}

const handleFinish = () => {
    isLoading.value = false
}

onMounted(() => {
    // Hide loader when initial page load is complete
    document.addEventListener('DOMContentLoaded', handleFinish)

    // For Inertia navigation
    document.addEventListener('inertia:start', handleStart)
    document.addEventListener('inertia:finish', handleFinish)
})

onBeforeUnmount(() => {
    document.removeEventListener('DOMContentLoaded', handleFinish)
    document.removeEventListener('inertia:start', handleStart)
    document.removeEventListener('inertia:finish', handleFinish)
})
</script>