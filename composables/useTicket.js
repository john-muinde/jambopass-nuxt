// composables/useTicket.js
import { ref } from "vue";
import html2canvas from "html2canvas";
import QRCode from "qrcode";

const ticketData = ref(null);
const isGenerating = ref(false);

export function useTicket() {
    const generateTicketData = async (paymentData, eventData) => {
        isGenerating.value = true;

        try {
            // Generate unique ticket ID
            const ticketId = `TKT-${Date.now()}-${Math.random()
                .toString(36)
                .substring(2, 9)}`;

            // Generate QR code data
            const qrData = await QRCode.toDataURL(
                JSON.stringify({
                    ticketId,
                    eventId: eventData.id,
                    paymentId: paymentData.transactionId,
                    timestamp: new Date().toISOString(),
                })
            );

            ticketData.value = {
                event: {
                    ...eventData,
                    date: new Date(eventData.date).toLocaleDateString(),
                    time: new Date(eventData.date).toLocaleTimeString(),
                },
                ticket: {
                    id: ticketId,
                    qrCode: qrData,
                    price: paymentData.amount,
                    purchaseDate: new Date().toISOString(),
                    paymentMethod: paymentData.method,
                    transactionId: paymentData.transactionId,
                },
            };
        } catch (error) {
            console.error("Error generating ticket:", error);
            throw new Error("Failed to generate ticket");
        } finally {
            isGenerating.value = false;
        }
    };

    const downloadTicket = async () => {
        if (!ticketData.value) return;

        try {
            const ticketElement = document.querySelector(".ticket-container");
            if (!ticketElement) return;

            const canvas = await html2canvas(ticketElement);
            const dataUrl = canvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.download = `ticket-${ticketData.value.ticket.id}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Error downloading ticket:", error);
        }
    };

    return {
        ticketData,
        isGenerating,
        generateTicketData,
        downloadTicket,
    };
}
