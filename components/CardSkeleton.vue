<script setup>
const props = defineProps({
    classes: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div v-if="classes.length > 0" class="animate-pulse rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div class="bg-gray-300 dark:bg-gray-600" :class="prop.classes" />
    </div>
    <div v-else class="animate-pulse rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div class="h-48 bg-gray-300 dark:bg-gray-600" />
        <div class="p-4">
            <div class="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div class="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div class="h-10 w-28 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
    </div>
</template>