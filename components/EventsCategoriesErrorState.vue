<script setup lang="ts">
defineProps<{ 
	error: any;
	fetchEventsAndCategories: () => Promise<void>;
}>()
</script>

<template>
	<div v-if="error" class="max-w-4xl mx-auto px-4 mb-6">
	            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
	                <div class="flex">
	                    <div class="flex-shrink-0">
	                        <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
	                            fill="currentColor">
	                            <path fill-rule="evenodd"
	                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
	                                clip-rule="evenodd" />
	                        </svg>
	                    </div>
	                    <div class="ml-3">
	                        <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
	                            {{ error.title }}
	                        </h3>
	                        <div class="mt-2 text-sm text-red-700 dark:text-red-300">
	                            <p>{{ error.message }}</p>
	                        </div>
	                        <div class="mt-4">
	                            <button @click="fetchEventsAndCategories"
	                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
	                                <svg class="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
	                                    viewBox="0 0 24 24" stroke="currentColor">
	                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
	                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
	                                </svg>
	                                Retry
	                            </button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
</template>
