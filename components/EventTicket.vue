<script setup>
import QRCode from 'qrcode'
import { ref, onMounted } from 'vue'

const props = defineProps({
    event: {
        type: Object,
        required: true
    },
    ticketDetails: {
        type: Object,
        required: true
    }
})

const qrCodeUrl = ref('')

onMounted(async () => {
    // Generate QR code with ticket details
    const qrCodeData = JSON.stringify({
        eventId: props.event.id,
        ticketId: props.ticketDetails.id,
        customerName: props.ticketDetails.name
    })

    qrCodeUrl.value = await QRCode.toDataURL(qrCodeData, {
        width: 300,
        color: {
            dark: '#4A90E2',  // Blue gradient start
            light: '#50C878'  // Green gradient end
        }
    })
})
</script>

<template>
    <div class="ticket-container bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="ticket-header bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white">
            <h2 class="text-2xl font-bold">{{ event.name }}</h2>
            <p class="text-sm">{{ event.venue }}</p>
        </div>

        <div class="ticket-body flex p-6">
            <div class="ticket-details flex-1">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <span class="text-xs text-gray-500">Date</span>
                        <p class="font-semibold">{{ event.date }}</p>
                    </div>
                    <div>
                        <span class="text-xs text-gray-500">Time</span>
                        <p class="font-semibold">{{ event.time }}</p>
                    </div>
                    <div>
                        <span class="text-xs text-gray-500">Seat</span>
                        <p class="font-semibold">{{ ticketDetails.seat }}</p>
                    </div>
                    <div>
                        <span class="text-xs text-gray-500">Price</span>
                        <p class="font-semibold">Kshs. {{ ticketDetails.price }}</p>
                    </div>
                </div>
            </div>

            <div class="ticket-qr flex items-center justify-center ml-6">
                <img :src="qrCodeUrl" alt="Ticket QR Code" class="w-40 h-40 object-contain rounded-lg" />
            </div>
        </div>

        <div class="ticket-footer bg-gray-100 p-4 text-center">
            <p class="text-xs text-gray-600">
                Ticket ID: {{ ticketDetails.id }}
            </p>
        </div>
    </div>
</template>