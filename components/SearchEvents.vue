<script setup>
import { ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import { Inertia } from '@inertiajs/inertia';
import showToast from '@/utils/notification';
import { formatLocalDate } from '@/utils/functions';


const searchResults = ref([]);
const isSearching = ref(false);
const showSearchResults = ref(false);
const searchQuery = ref('');

// const handleSearch = () => {
// 	if (!searchQuery.value.trim()) {
// 		showToast("Please enter a search query", "error");
// 		return;
// 	}

// 	Inertia.visit(route('events.search', { query: searchQuery.value }));
// }

// Search functionality
const handleSearch = async () => {
	if (!searchQuery.value.trim()) return;

	isSearching.value = true;
	showSearchResults.value = true;

	try {
		const response = await window.axios.post(`https://jambopass.com/apis/events/search-events.php`, {
			"keywords": searchQuery.value
		});
		searchResults.value = response.data.events;
	} catch (err) {
		showToast("Search failed. Please try again.", "error");
	} finally {
		isSearching.value = false;
	}
};

const handleSearchInput = (e) => {
	searchQuery.value = e.target.value;
	if (!e.target.value) {
		showSearchResults.value = false;
		searchResults.value = [];
	}
};

// Function to close search results when clicking outside
const closeSearchResults = () => {
	if (!isSearching.value && showSearchResults.value) {
		showSearchResults.value = false;
		searchResults.value = [];
		console.log('closing')
	}

};

// onBeforeUnmount(() => {
// 	document.removeEventListener('click', closeSearchResults);
// });

// onMounted(async () => {
// 	document.addEventListener('click', closeSearchResults);
// 	fetchEventsAndCategories();
// });

// watch(() => props.query, async (newQuery) => {
// 	if (!newQuery.trim()) {
// 		showSearchResults.value = false;
// 		searchResults.value = [];
// 		return;
// 	}

// 	isSearching.value = true;
// 	showSearchResults.value = true;

// 	try {
// 		const response = await window.axios.post(`https://jambopass.com/apis/events/search-events.php`, {
// 			"keywords": newQuery
// 		});
// 		searchResults.value = response.data.events;
// 	} catch (err) {
// 		showToast("Search failed. Please try again.", "error");
// 	} finally {
// 		isSearching.value = false;
// 	}
// });

// watch(() => props.show, (newShow) => {
// 	showSearchResults.value = newShow;
// 	if (!newShow) {
// 		searchResults.value = [];
// 	}
// });




</script>

<template>
	<form @submit.prevent="handleSearch" class="relative">
		<input type="search" v-model="searchQuery" @input="handleSearchInput" placeholder="Search events..."
			class="w-full px-6 py-3 pr-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:text-black" />
		<button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
			:disabled="isSearching">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{ 'animate-spin': isSearching }" fill="none"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</button>
	</form>
	<TransitionRoot :show="showSearchResults" enter="transition-all duration-300"
		enter-from="opacity-0 transform -translate-y-2" enter-to="opacity-100 transform translate-y-0"
		leave="transition-all duration-200" leave-from="opacity-100 transform translate-y-0"
		leave-to="opacity-0 transform -translate-y-2">
		<div v-if="showSearchResults" ref="searchResultsDropdown"
			class="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-h-96 overflow-hidden">
			<div v-if="isSearching" class="p-4 text-center text-gray-600 dark:text-gray-400">
				<svg class="animate-spin h-6 w-6 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none"
					viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
					</path>
				</svg>
				Searching...
			</div>
			<div v-else-if="searchResults.length"
				class="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-transparent scrollbar-corner-orange-500">

				<div v-for="result in searchResults" :key="result.id"
					class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-row items-center hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
					@click="() => { closeSearchResults(); $inertia.visit(route('events.show', { id: result.id })); }">
					<div class="flex rounded-sm">
						<img :src="result.images[0]" alt="Event Image" class="w-20 h-16 rounded-lg mr-4"
							loading="lazy" />
					</div>
					<div class="flex-1 text-left">
						<h3 class="font-semibold text-lg mb-1 text-gray-900 dark:text-gray-100">{{ result.name }}</h3>
						<div class="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
							<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v9H4V8z">
								</path>
							</svg>
							{{ formatLocalDate(result.eventDate) }}
						</div>
						<div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
							<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z">
								</path>
							</svg>
							{{ result.location.name }}
						</div>
					</div>
				</div>
			</div>
			<div v-else class="p-4 text-center text-gray-600 dark:text-gray-400">
				No events found
			</div>
		</div>
	</TransitionRoot>
</template>
