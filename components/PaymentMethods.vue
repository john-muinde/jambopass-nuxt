<script setup>
import { ref, computed, watch } from 'vue'
import {
    CreditCard, X, CheckCircle2, AlertCircle,
    ChevronDown, Loader2, CreditCardIcon,
    Phone, Send, Copy, ArrowUpRight, ExternalLink,
    CopyCheck
} from 'lucide-vue-next'
import EventTicket from './EventTicket.vue'
import Modal from './Modal.vue'
import { useTicket } from '@/composables/useTicket'

const { ticketData, downloadTicket } = useTicket()

// Props
const props = defineProps({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'KES'
    },
    customerPhone: {
        type: String,
        default: ''
    },
    onPaymentComplete: {
        type: Function,
        required: true
    }
})

// External payment popover state
const showPopover = ref(false)
const copySuccess = ref(false)
const copiedText = ref('')
const paymentLink = ref('')

// Payment methods configuration
const PAYMENT_METHODS = [
    {
        name: "M-PESA",
        icon: "/images/icons/mpesa-logo.png",
        type: "mobile-money",
        ussdCode: "*334#",
        requiresPhone: true,
        businessNumber: "247247",
        accountNumber: "0100",
        instructions: [
            { text: "Enter M-PESA number", icon: Phone },
            { text: "Wait for prompt on your phone", icon: AlertCircle },
            { text: "Enter PIN to complete", icon: CheckCircle2 }
        ],
    },
    {
        name: "AIRTEL MONEY",
        icon: "/images/icons/airtel-logo.png",
        type: "mobile-money",
        ussdCode: "*100#",
        businessNumber: "120120",
        instructions: [
            { text: "Dial *100#", icon: Phone },
            { text: "Select Pay Bill", icon: Send },
            { text: "Enter Account Number", icon: CheckCircle2 }
        ]
    },
    {
        name: "VISA",
        icon: "/images/icons/visa-logo.png",
        type: "card",
        pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
        instructions: [
            { text: "Enter Card Details", icon: CreditCardIcon },
            { text: "Verify CVV", icon: CheckCircle2 },
            { text: "Confirm Payment", icon: CheckCircle2 }
        ]
    },
    {
        name: "MASTERCARD",
        icon: "/images/icons/mastercard-logo-black.png",
        dark: "/images/icons/mastercard-logo-white.png",
        type: "card",
        pattern: "^5[1-5][0-9]{14}$",
        instructions: [
            { text: "Enter Card Details", icon: CreditCardIcon },
            { text: "Verify CVV", icon: CheckCircle2 },
            { text: "Complete Payment", icon: CheckCircle2 }
        ]
    },
    {
        name: "PAYPAL",
        icon: "/images/icons/paypal-logo.png",
        type: "online",
        instructions: [
            { text: "Continue to PayPal", icon: ExternalLink },
            { text: "Login to your account", icon: CheckCircle2 },
            { text: "Confirm payment", icon: CheckCircle2 }
        ]
    },
    {
        name: "HELAHUB",
        icon: "/images/icons/helahub-logo.png",
        type: "online",
        instructions: [
            { text: "Continue to HelaHub", icon: ExternalLink },
            { text: "Verify account", icon: CheckCircle2 },
            { text: "Complete payment", icon: CheckCircle2 }
        ]
    }
]

// Form state
const paymentMethod = ref(null)
const formData = ref({
    fullName: '',
    phone: props.customerPhone,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    country: 'Kenya'
})

// UI state
const isProcessing = ref(false)
const showCountryDropdown = ref(false)
const errors = ref({})
const paymentStatus = ref(null)
const mpesaStatus = ref(null)

const isDarkMode = computed(() => {
    return document.documentElement.classList.contains('dark')
})

// Generate unique payment link
const generatePaymentLink = (method) => {
    const baseUrl = window.location.origin
    const params = new URLSearchParams({
        amount: props.amount,
        currency: props.currency,
        method: method.toLowerCase(),
        timestamp: Date.now()
    })
    return `${baseUrl}/pay?${params.toString()}`
}


// Copy link handler
const copyLink = async (text) => {
    try {
        await navigator.clipboard.writeText(text)
        copySuccess.value = true
        copiedText.value = text;
        setTimeout(() => {
            copySuccess.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

// Add ref for form
const formRef = ref(null)

const showExternalPayment = (method) => {
    paymentLink.value = generatePaymentLink(method)
    showPopover.value = true
}

// Close popover
const closePopover = () => {
    showPopover.value = false
    copySuccess.value = false
}

// Card formatting helpers
const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    return parts.length ? parts.join(' ') : value
}

const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
        return v.slice(0, 2) + ' / ' + v.slice(2, 4)
    }
    return v
}

// Watchers
watch(() => formData.value.cardNumber, (newVal) => {
    formData.value.cardNumber = formatCardNumber(newVal)
})

watch(() => formData.value.expiryDate, (newVal) => {
    formData.value.expiryDate = formatExpiryDate(newVal)
})

// Form validation
const validateForm = () => {
    errors.value = {}

    if (paymentMethod.value?.type === 'card') {
        if (!formData.value.cardNumber || formData.value.cardNumber.replace(/\s/g, '').length < 16) {
            errors.value.cardNumber = 'Valid card number is required'
        }
        if (!formData.value.expiryDate || formData.value.expiryDate.length < 7) {
            errors.value.expiryDate = 'Valid expiry date is required'
        }
        if (!formData.value.cvv || formData.value.cvv.length < 3) {
            errors.value.cvv = 'Valid security code is required'
        }
    }

    if (paymentMethod.value?.requiresPhone && !formData.value.phone) {
        errors.value.phone = 'Phone number is required'
    }

    return Object.keys(errors.value).length === 0
}

// Payment processing
const handlePayment = async (type) => {
    if (type === 'online') {
        showExternalPayment(paymentMethod.value?.name)
        return
    }

    const isCard = type === 'card'
    isProcessing.value = true
    paymentStatus.value = 'processing'
    if (!isCard) mpesaStatus.value = 'pending'

    try {
        await new Promise((resolve, reject) =>
            setTimeout(() => Math.random() > 0.7 ? reject() : resolve(), 2000)
        )

        if (isCard) {
            paymentStatus.value = 'success'
            props.onPaymentComplete({
                method: paymentMethod.value.name,
                transactionId: `TRX${Date.now()}`,
                amount: props.amount,
                currency: props.currency,
                date: new Date()
            })
        } else {
            setTimeout(() => {
                mpesaStatus.value = null
                paymentStatus.value = 'error'
                errors.value.payment = 'Payment timeout. Please try again.'
            }, 15000)
        }
    } catch {
        paymentStatus.value = 'error'
        mpesaStatus.value = null
        errors.value.payment = 'Payment failed. Please try again.'
    } finally {
        if (isCard) isProcessing.value = false
    }
}

const handleSubmit = () => {
    if (!validateForm()) return
    handlePayment(paymentMethod.value?.type)
}

const getMethodLogo = (method) => {
    if (isDarkMode.value && method.dark) return method.dark
    return method.icon
}

const close = () => {
    paymentStatus.value = null
    mpesaStatus.value = null
}
</script>

<template>
    <div class="">
        <div class="bg-white dark:bg-gray-800 rounded-xl max-w-full w-full relative">
            <!-- Payment Form -->
            <form ref="formRef" @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Payment Method Selection -->
                <div class="space-y-2">
                    <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                        Select Payment Method
                    </h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        Total Amount: {{ currency }} {{ amount.toFixed(2) }}
                    </p>

                    <div class="grid grid-cols-3 gap-4 sm:grid-cols-6">
                        <button v-for="method in PAYMENT_METHODS" :key="method.name" type="button"
                            @click="paymentMethod = method; if (method.type == 'online') handlePayment('online')"
                            :class="{
                                'ring-2 ring-orange-500 bg-orange-50 dark:bg-gray-700': paymentMethod === method,
                                'bg-gray-100 dark:bg-gray-800': paymentMethod !== method,
                            }"
                            class="flex items-center justify-center p-4 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-all">
                            <img :src="getMethodLogo(method)" :alt="method.name" class="w-16 h-8 object-contain" />
                        </button>
                    </div>
                </div>

                <!-- Method Specific Fields -->
                <template v-if="paymentMethod?.type === 'card'">
                    <!-- Country -->
                    <div class="relative">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Country or region
                        </label>
                        <button type="button" @click="showCountryDropdown = !showCountryDropdown"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg flex items-center justify-between dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            {{ formData.country }}
                            <ChevronDown class="w-5 h-5" />
                        </button>

                        <!-- Country Dropdown -->
                        <div v-if="showCountryDropdown"
                            class="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                            <div class="py-1">
                                <button v-for="country in ['Kenya', 'Uganda', 'Tanzania']" :key="country" type="button"
                                    @click="formData.country = country; showCountryDropdown = false"
                                    class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600">
                                    {{ country }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Full Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Full name
                        </label>
                        <input v-model="formData.fullName" type="text"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            :class="{ 'border-red-500': errors.fullName }" />
                        <p v-if="errors.fullName" class="mt-1 text-sm text-red-500">{{ errors.fullName }}</p>
                    </div>


                    <!-- Card Number -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Card number
                        </label>
                        <div class="relative">
                            <input v-model="formData.cardNumber" type="text" maxlength="19"
                                class="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                :class="{ 'border-red-500': errors.cardNumber }" />
                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <CreditCard class="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                        <p v-if="errors.cardNumber" class="mt-1 text-sm text-red-500">{{ errors.cardNumber }}</p>
                    </div>

                    <!-- Expiry and CVV -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Expiration date
                            </label>
                            <input v-model="formData.expiryDate" type="text" placeholder="MM / YY" maxlength="7"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                :class="{ 'border-red-500': errors.expiryDate }" />
                            <p v-if="errors.expiryDate" class="mt-1 text-sm text-red-500">{{ errors.expiryDate }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Security code
                            </label>
                            <input v-model="formData.cvv" type="text" maxlength="4"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                :class="{ 'border-red-500': errors.cvv }" />
                            <p v-if="errors.cvv" class="mt-1 text-sm text-red-500">{{ errors.cvv }}</p>
                        </div>
                    </div>
                </template>

                <template v-if="paymentMethod?.type === 'mobile-money'">
                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                {{ paymentMethod.name }} Instructions
                            </h3>
                            <img :src="getMethodLogo(paymentMethod)" :alt="paymentMethod.name" class="h-8 w-auto" />
                        </div>

                        <div class="space-y-4">
                            <div v-if="paymentMethod.requiresPhone">
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Phone Number
                                </label>
                                <input v-model="formData.phone" type="tel"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                    :class="{ 'border-red-500': errors.phone }" />
                                <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
                            </div>

                            <div class="border-t border-gray-200 dark:border-gray-600 pt-4">
                                <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Payment Steps:
                                </h4>
                                <div class="space-y-3">
                                    <div v-for="(instruction, index) in paymentMethod.instructions" :key="index"
                                        class="flex items-start space-x-3">
                                        <component :is="instruction.icon" class="w-5 h-5 text-orange-500 mt-0.5" />
                                        <span class="text-sm text-gray-600 dark:text-gray-300">
                                            {{ instruction.text }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div v-if="paymentMethod.businessNumber"
                                class="bg-orange-50 dark:bg-gray-600 rounded-lg p-4 mt-4">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Business Number
                                        </p>
                                        <p class="text-lg font-bold text-orange-600 dark:text-orange-400">
                                            {{ paymentMethod.businessNumber }}
                                        </p>
                                    </div>
                                    <button type="button" @click="() => copyLink(paymentMethod.businessNumber)"
                                        class="p-2 text-orange-600 hover:bg-orange-100 rounded-lg">
                                        <CopyCheck v-if="copySuccess && copiedText == paymentMethod.businessNumber"
                                            class="w-5 h-5" />
                                        <Copy v-else class="w-5 h-5" />
                                    </button>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <div>
                                        <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Account Number
                                        </p>
                                        <p class="text-lg font-bold text-orange-600 dark:text-orange-400">
                                            {{ paymentMethod.accountNumber }}
                                        </p>
                                    </div>
                                    <button type="button" @click="() => copyLink(ticketData?.ticket.id)"
                                        class="p-2 text-orange-600 hover:bg-orange-100 rounded-lg">
                                        <CopyCheck v-if="copySuccess && copiedText == ticketData?.ticket.id"
                                            class="w-5 h-5" />
                                        <Copy v-else class="w-5 h-5" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </template>
                <!-- Payment Status -->
                <div v-if="paymentStatus || mpesaStatus" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <!-- Processing -->
                    <div v-if="paymentStatus === 'processing'" class="flex items-center space-x-2">
                        <Loader2 class="w-5 h-5 text-orange-500 animate-spin" />
                        <span class="text-sm text-gray-600 dark:text-gray-300">Processing payment...</span>
                    </div>

                    <!-- M-PESA Pending -->
                    <div v-if="mpesaStatus === 'pending'" class="space-y-3">
                        <div class="flex items-center space-x-2">
                            <Loader2 class="w-5 h-5 text-orange-500 animate-spin" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">
                                Waiting for confirmation...
                            </span>
                        </div>
                        <div class="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-orange-500 to-pink-500 animate-gradient" />
                        </div>
                    </div>

                    <!-- Success -->
                    <div v-if="paymentStatus === 'success'" class="flex items-center space-x-2 text-green-500">
                        <CheckCircle2 class="w-5 h-5" />
                        <span class="text-sm">Payment successful!</span>
                    </div>

                    <!-- Error -->
                    <div v-if="paymentStatus === 'error'" class="flex items-center space-x-2 text-red-500">
                        <AlertCircle class="w-5 h-5" />
                        <span class="text-sm">{{ errors.payment }}</span>
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" :disabled="(isProcessing || !paymentMethod) && paymentStatus == 'processing'"
                    class="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    <span v-if="isProcessing" class="flex items-center justify-center space-x-2">
                        <Loader2 class="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                    </span>
                    <template v-else>
                        <span v-if="paymentMethod?.type === 'online'">
                            Continue to {{ paymentMethod.name }}
                        </span>
                        <span v-else>
                            Pay {{ currency }} {{ amount.toFixed(2) }}
                        </span>
                    </template>
                </button>

                <!-- Terms -->
                <p class="text-xs text-gray-500 dark:text-gray-400">
                    By providing your payment information, you agree to our
                    <a href="#" class="text-orange-500 hover:text-orange-600">terms</a>
                    and authorize charges to your payment method.
                </p>
            </form>
        </div>

        <!-- External Payment Popover -->
        <Transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="showPopover"
                class="absolute inset-0 h-min m-auto z-50 w-80 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <!-- Popover Arrow -->
                <div class="absolute -bottom-2 left-1/2 -ml-2 w-4 h-4">
                    <div
                        class="absolute rotate-45 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700">
                    </div>
                </div>

                <!-- Content -->
                <div class="p-4">
                    <div class="flex items-start justify-between">
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                            Continue to {{ paymentMethod?.name }}
                        </h3>
                        <button @click="closePopover"
                            class="ml-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <X class="w-4 h-4" />
                        </button>
                    </div>

                    <div class="mt-3 space-y-4">
                        <!-- Primary Action -->
                        <a :href="paymentLink" target="_blank"
                            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                            Open {{ paymentMethod?.name }}
                            <ArrowUpRight class="w-4 h-4 ml-2" />
                        </a>

                        <!-- Copy Link -->
                        <button @click="() => copyLink(paymentLink)" type="button"
                            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <template v-if="!copySuccess">
                                <Copy class="w-4 h-4 mr-2" />
                                Copy Payment Link
                            </template>
                            <template v-else>
                                <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
                                Copied!
                            </template>
                        </button>
                    </div>

                    <!-- Help Text -->
                    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Can't proceed? Copy the link and open in a new window, or try refreshing the page.
                    </p>
                </div>
            </div>
        </Transition>


        <!-- Click Outside Detection -->
        <div v-if="showPopover" class="fixed inset-0 z-40" @click="closePopover"></div>

        <!-- Success Modal with Ticket -->
        <Modal :show="paymentStatus === 'success'" @close="close" max-width="2xl">
            <div class="p-6">
                <!-- Success Content -->
                <div class="text-center mb-6">
                    <div
                        class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                        <CheckCircle2 class="h-6 w-6 text-green-600 dark:text-green-300" />
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                        Payment Successful!
                    </h3>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Your payment has been processed successfully. Here's your ticket!
                    </p>
                </div>

                <!-- Ticket -->
                <EventTicket v-if="ticketData" :event="ticketData.event" :ticket-details="ticketData.ticket"
                    class="mb-6" />

                <!-- Actions -->
                <div class="mt-4 flex justify-center space-x-4">
                    <button type="button" @click="downloadTicket"
                        class="inline-flex justify-center rounded-md border border-transparent bg-orange-100 dark:bg-orange-900 px-4 py-2 text-sm font-medium text-orange-900 dark:text-orange-100 hover:bg-orange-200 dark:hover:bg-orange-800 focus:outline-none">
                        Download Ticket
                    </button>
                    <button type="button" @click="close"
                        class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none">
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<style scoped>
.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 2s linear infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}

/* Custom styles for form inputs */
input {
    @apply transition-colors duration-200;
}

input:focus {
    @apply outline-none ring-2 ring-orange-500 border-transparent;
}
</style>