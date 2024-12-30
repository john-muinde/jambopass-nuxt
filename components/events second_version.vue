<script setup>
import { ref, computed, watch } from 'vue'
import { XIcon, TicketIcon, UserIcon, CreditCardIcon } from 'lucide-vue-next'
import Modal from './Modal.vue';

const props = defineProps({
    event: {
        type: [Object, null],
        required: true,
        default: () => ({})
    },
    show: {
        type: Boolean,
        default: false
    },
    ticketsModal: {
        type: Function,
        default: () => console.log('closing tickets modal')
    }
})

// Booking steps
const STEPS = {
    TICKET_SELECTION: 0,
    EMAIL_ENTRY: 1,
    PAYMENT: 2
}

// State management
const currentStep = ref(STEPS.TICKET_SELECTION)
const selectedEvent = ref(props.event)
const email = ref('')
const userDetails = ref({
    fullName: '',
    phone: ''
})
const paymentMethod = ref('mpesa')

// Watch for changes in props.event to keep selectedEvent in sync
watch(
    () => props.event,
    (newEvent) => {
        selectedEvent.value = newEvent
    },
    { immediate: true }
)

// Automatically calculate total amount based on ticket subtotals
const totalAmount = computed(() => {
    return selectedEvent.value?.tickets.reduce((total, ticket) => total + (ticket.subTotal || 0), 0) || 0
})

// Selected tickets
const selectedTickets = computed(() =>
    selectedEvent.value?.tickets.filter(ticket => ticket.count > 0) || []
)

// Helper to format numbers with commas and two decimals
const formatAmount = (amount) => {
    return parseFloat(amount).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// Function to increase or decrease ticket count
const ticketCount = (ticket, increase = true) => {
    if (ticket.available) {
        ticket.count = increase
            ? (ticket.count || 0) + 1
            : Math.max((ticket.count || 0) - 1, 0)
        ticket.subTotal = ticket.price * (ticket.count || 0)
    }
}

// Payment processing state
const isProcessing = ref(false)
const paymentProgress = ref(0)
const paymentStatus = ref('active')

// Navigation and validation methods
const validateTicketSelection = () => {
    if (totalAmount.value <= 0) {
        alert('Please select at least one ticket to continue')
        return false
    }
    return true
}

const validateEmailEntry = () => {
    if (!email.value) {
        alert('Please enter your email')
        return false
    }
    if (!userDetails.value.fullName) {
        alert('Please enter your full name')
        return false
    }
    if (!userDetails.value.phone) {
        alert('Please enter your phone number')
        return false
    }
    return true
}

const continueBooking = () => {
    switch (currentStep.value) {
        case STEPS.TICKET_SELECTION:
            if (validateTicketSelection()) {
                currentStep.value = STEPS.EMAIL_ENTRY
            }
            break
        case STEPS.EMAIL_ENTRY:
            if (validateEmailEntry()) {
                currentStep.value = STEPS.PAYMENT
            }
            break
        case STEPS.PAYMENT:
            processPayment()
            break
    }
}

const processPayment = () => {
    isProcessing.value = true
    paymentProgress.value = 0
    paymentStatus.value = 'active'

    const paymentSimulation = setInterval(() => {
        paymentProgress.value += 20

        if (paymentProgress.value >= 100) {
            clearInterval(paymentSimulation)
            paymentStatus.value = 'success'
            alert('Payment Successful!')

            // Reset or close modal
            props.ticketsModal(null)
            isProcessing.value = false
        }
    }, 1000)

    // Simulate potential payment failure
    setTimeout(() => {
        if (Math.random() < 0.2) {
            clearInterval(paymentSimulation)
            paymentStatus.value = 'exception'
            isProcessing.value = false
            alert('Payment Failed. Please try again.')
        }
    }, 3000)
}

const goBack = () => {
    if (currentStep.value > STEPS.TICKET_SELECTION) {
        currentStep.value--
    } else {
        props.ticketsModal(null)
    }
}
</script>

<template>
    <Modal :show="show">
        <!-- Header -->
        <div class="flex justify-between items-center p-4 bg-orange-500 text-white">
            <div class="text-2xl font-bold">Event Ticket</div>
            <button @click="ticketsModal(null)" class="hover:bg-orange-600 rounded-full p-2 transition-colors">
                <XIcon class="w-6 h-6" />
            </button>
        </div>

        <!-- Steps Indicator -->
        <div class="flex justify-between px-4 py-2 bg-orange-50 dark:bg-gray-700">
            <div v-for="(step, index) in ['Tickets', 'Details', 'Payment']" :key="step" class="flex items-center">
                <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2" :class="{
                    'bg-orange-500 text-white': currentStep === index,
                    'bg-gray-200 dark:bg-gray-600 text-gray-500': currentStep !== index
                }">
                    {{ index + 1 }}
                </div>
                <span class="text-sm" :class="{
                    'font-bold text-orange-500': currentStep === index,
                    'text-gray-500 dark:text-gray-300': currentStep !== index
                }">
                    {{ step }}
                </span>
            </div>
        </div>

        <!-- Ticket Selection Step -->
        <div v-if="currentStep === 0" class="p-4">
            <h2 class="text-xl font-bold text-orange-500 mb-4">
                {{ selectedEvent?.name }} Tickets
            </h2>

            <div v-for="ticket in selectedEvent?.tickets" :key="ticket.type"
                class="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4 shadow-md transform transition-transform hover:scale-105">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold" :class="{ 'line-through text-gray-400': !ticket.available }">
                        {{ ticket.name }}
                    </span>
                    <span class="text-sm" :class="{
                        'text-green-500': ticket.available,
                        'text-red-500': !ticket.available
                    }">
                        {{ ticket.available ? 'Available' : 'Sold Out' }}
                    </span>
                </div>

                <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-gray-300">
                        Ksh {{ formatAmount(ticket.price) }}
                    </span>

                    <div class="flex items-center space-x-2">
                        <button @click="ticketCount(ticket, false)" :disabled="!ticket.available || ticket.count === 0"
                            class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center 
                                    disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors">
                            -
                        </button>
                        <span class="text-lg font-bold">
                            {{ ticket.count || 0 }}
                        </span>
                        <button @click="ticketCount(ticket, true)" :disabled="!ticket.available"
                            class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center 
                                    disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors">
                            +
                        </button>
                    </div>

                    <span class="font-bold text-orange-500">
                        Ksh {{ formatAmount(ticket.subTotal || 0) }}
                    </span>
                </div>
            </div>

            <div class="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <div class="flex justify-between items-center">
                    <span class="font-semibold">Total:</span>
                    <span class="text-xl font-bold text-orange-500">
                        Ksh {{ formatAmount(totalAmount) }}
                    </span>
                </div>
            </div>

            <div class="flex justify-end">
                <button @click="continueBooking" class="bg-orange-500 text-white px-6 py-2 rounded-lg 
                            hover:bg-orange-600 transition-colors flex items-center space-x-2">
                    Continue
                    <ChevronRight class="w-5 h-5" />
                </button>
            </div>
        </div>

        <!-- Email and Details Step -->
        <div v-else-if="currentStep === 1" class="p-4">
            <h2 class="text-xl font-bold text-orange-500 mb-4">
                Enter Your Details
            </h2>

            <div class="space-y-4">
                <div class="flex flex-col">
                    <label class="mb-2 text-gray-700 dark:text-gray-300">Email</label>
                    <input v-model="email" type="email" placeholder="Enter your email"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>

                <div class="flex flex-col">
                    <label class="mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                    <input v-model="userDetails.fullName" type="text" placeholder="Enter your full name"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>

                <div class="flex flex-col">
                    <label class="mb-2 text-gray-700 dark:text-gray-300">Phone Number</label>
                    <input v-model="userDetails.phone" type="tel" placeholder="Enter your phone number"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
            </div>

            <div class="mt-6 flex justify-between">
                <button @click="goBack" class="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg 
                            hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors flex items-center space-x-2">
                    <ChevronLeft class="w-5 h-5" />
                    Back
                </button>
                <button @click="continueBooking" class="bg-orange-500 text-white px-6 py-2 rounded-lg 
                            hover:bg-orange-600 transition-colors flex items-center space-x-2">
                    Continue
                    <ChevronRight class="w-5 h-5" />
                </button>
            </div>
        </div>

        <!-- Payment Step -->
        <div v-else-if="currentStep === 2" class="p-4">
            <h2 class="text-xl font-bold text-orange-500 mb-4">
                Complete Payment
            </h2>

            <div class="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <div class="flex justify-between mb-2">
                    <span>Total Amount:</span>
                    <span class="font-bold text-orange-500">
                        Ksh {{ formatAmount(totalAmount) }}
                    </span>
                </div>
                <div class="mt-2">
                    <span class="font-semibold">Selected Tickets:</span>
                    <div v-for="ticket in selectedTickets" :key="ticket.type" class="flex justify-between">
                        <span>{{ ticket.name }}</span>
                        <span>x {{ ticket.count }}</span>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <span class="block mb-2">Payment Method:</span>
                <div class="grid grid-cols-2 gap-4">
                    <button @click="paymentMethod = 'mpesa'"
                        class="py-2 rounded-lg transition-colors flex items-center justify-center space-x-2" :class="{
                            'bg-orange-500 text-white': paymentMethod === 'mpesa',
                            'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300': paymentMethod !== 'mpesa'
                        }">
                        M-PESA
                    </button>
                    <button @click="paymentMethod = 'card'"
                        class="py-2 rounded-lg transition-colors flex items-center justify-center space-x-2" :class="{
                            'bg-orange-500 text-white': paymentMethod === 'card',
                            'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white': paymentMethod !== 'card'
                        }">
                        Card
                    </button>
                </div>
                <div class="relative pt-1">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                        <div :style="{ width: `${paymentProgress}%` }"
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500 transition-all duration-500">
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-between">
                    <button @click="goBack" class="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg 
                            hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors flex items-center space-x-2">
                        <ChevronLeft class="w-5 h-5" />
                        Back
                    </button>
                    <button @click="continueBooking" :disabled="isProcessing" class="bg-orange-500 text-white px-6 py-2 rounded-lg 
                            hover:bg-orange-600 transition-colors flex items-center space-x-2
                            disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ isProcessing ? 'Processing...' : 'Pay Now' }}
                        <CreditCardIcon class="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    </Modal>
</template>