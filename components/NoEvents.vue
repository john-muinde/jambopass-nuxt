<script setup>
defineProps({
	fetchEventsAndCategories: {
		type: Function,
		required: true
	},
	isLoading: {
		type: Boolean,
		required: true
	},
	refreshHome: {
		type: Function,
		required: true
	}
});

</script>


<template>
	<div class="col-span-full">
		<div class="max-w-2xl mx-auto py-12 px-4">
			<div class="text-center">
				<!-- Illustration -->
				<div class="mb-8 relative inline-block">
					<div class="relative">
						<div
							class="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full animate-pulse">
						</div>
						<svg class="w-24 h-24 text-yellow-500 relative" xmlns="http://www.w3.org/2000/svg" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<div class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
							<svg class="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
							</svg>
						</div>
					</div>
				</div>

				<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
					No Events At The Moment
				</h3>

				<p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
					We're working on bringing you the most exciting events. In the meantime,
					try adjusting your search or check back soon for new events!
				</p>

				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<button @click="fetchEventsAndCategories"
						class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105">
						<svg class="w-5 h-5 mr-2" :class="{ 'animate-spin': isLoading }"
							xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
						Refresh Events
					</button>

					<button @click="refreshHome"
						class="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 font-medium transition-colors duration-200">
						<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						Start Fresh
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
