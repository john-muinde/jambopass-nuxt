<script setup>
import { ref, computed, watch } from 'vue';
import Modal from '@/Components/Modal.vue';


const props = defineProps({
    event: {
        type: [Object, null],
        required: true,
        default: {}
    },
    show: {
        type: Boolean,
        default: false
    },
    ticketsModal: {
        type: Function,
        default: () => console.log('closing tickets modal')
    }
});

// Reference for selectedEvent
const selectedEvent = ref(props.event);
const email = ref('');

// Automatically calculate total amount based on ticket subtotals
const totalAmount = computed(() => {
    return selectedEvent.value?.tickets.reduce((total, ticket) => total + (ticket.subTotal || 0), 0) || 0;
});

// Watch for changes in props.event to keep selectedEvent in sync
watch(
    () => props.event,
    (newEvent) => {
        selectedEvent.value = newEvent;
    },
    { immediate: true }
);

// Helper to format numbers with commas and two decimals
const formatAmount = (amount) => {
    return parseFloat(amount).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// Function to increase or decrease ticket count
const ticketCount = (ticket, increase = true) => {
    if (ticket.available) {
        ticket.count = increase ? (ticket.count || 0) + 1 : Math.max((ticket.count || 0) - 1, 0);
        ticket.subTotal = ticket.price * (ticket.count || 0);
    }
};

const continueBooking = () => {
    if (totalAmount.value <= 0) {
        showToast('Please select at least one ticket to continue', 'error');
        return;
    }

    if (!enterEmail.value) {
        enterEmailModal(true);
        return;
    }

    if (enterEmail.value) {
        if (!email.value.length) {
            showToast('Please enter your email to continue', 'error');
            return;
        }
        // proceed to money payment
        enterEmailModal(false);
    }
};

const enterEmail = ref(false);

const enterEmailModal = (show) => {
    enterEmail.value = show;
};

</script>

<template>
    <Modal :show="show" @close="ticketsModal(null)">
        <div class="p-2">
            <div class="flex justify-between items-center mb-4">
                <div class="text-yellow-500 text-xl font-bold">JP</div>
                <button @click="ticketsModal(null)" class="text-yellow-500 text-2xl">&times;</button>
            </div>

            <h2 class="text-yellow-500 text-xl mb-4">{{ selectedEvent?.name }} Tickets</h2>

            <div v-for="ticket in selectedEvent?.tickets" :key="ticket.type"
                class="dark:bg-gray-700 bg-white rounded-lg px-2 py-1 mb-4 shadow-md">
                <!-- Ticket type -->
                <div class="flex justify-between items-center">
                    <span class="dark:decoration-red-600"
                        :class="{ 'line-through': !ticket.available }">{{ ticket.name }}</span>
                </div>
                <!-- Ticket price and quantity -->
                <div class="flex justify-between items-center">
                    <span
                        class="text-gray-400 italic text-sm flex-1">{{ ticket.available ? 'Available' : 'Not Available' }}</span>
                    <div class="flex flex-col justify-center items-center flex-1">
                        <span class="mb-1">Ksh {{ formatAmount(ticket.price) }}</span>
                        <div class="flex items-center">
                            <button @click="ticketCount(ticket, false)"
                                class="px-2 py-1 dark:bg-gray-600 shadow-lg rounded"
                                :disabled="!ticket.available || ticket.count === 0">-</button>
                            <span class="mx-2">{{ ticket.count || 0 }}</span>
                            <button @click="ticketCount(ticket, true)"
                                class="px-2 py-1 dark:bg-gray-600 shadow-lg rounded"
                                :disabled="!ticket.available">+</button>
                        </div>
                    </div>
                    <span class="text-yellow-500 flex-1 flex justify-end">Ksh
                        {{ formatAmount(ticket.subTotal || 0) }}</span>
                </div>
            </div>

            <div class="bg-white text-black p-4 rounded-lg mb-4">
                <div class="flex justify-between">
                    <span>Total:</span>
                    <span>Ksh {{ formatAmount(totalAmount) }}</span>
                </div>
            </div>

            <div class="mt-6 flex justify-end">
                <button
                    class="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                    @click="continueBooking">Continue
                </button>
            </div>
        </div>
    </Modal>
</template>
