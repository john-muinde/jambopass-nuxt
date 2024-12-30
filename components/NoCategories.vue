<script setup lang="ts">
defineProps<{
	isLoading: boolean;
	fetchEventsAndCategories: () => Promise<void>;
}>()
</script>

<template>
	<template>
		<div
			class="w-full py-8 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm">
			<div class="mb-6 relative">
				<svg class="w-16 h-16 text-yellow-500/20" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
					viewBox="0 0 24 24">
					<path
						d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
					<path d="M9 12h6v2H9z" />
				</svg>
				<svg class="w-8 h-8 text-yellow-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>
			<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Getting Things Ready!</h3>
			<p class="text-gray-600 dark:text-gray-400 text-center max-w-sm mb-6">
				We're setting up some amazing event categories for you. Check back in a moment!
			</p>
			<button @click="fetchEventsAndCategories"
				class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
				<svg class="w-5 h-5 mr-2" :class="{ 'animate-spin': isLoading }" xmlns="http://www.w3.org/2000/svg"
					fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
				</svg>
				Refresh
			</button>
		</div>
	</template>
</template>
