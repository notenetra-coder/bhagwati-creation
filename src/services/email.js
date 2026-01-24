import emailjs from '@emailjs/browser';

// Configuration - Replace these with your actual keys from EmailJS dashboard
// Or better yet, put them in .env file as VITE_EMAILJS_SERVICE_ID, etc.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const ORDER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID || 'YOUR_ORDER_TEMPLATE_ID';
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export const EmailService = {
    /**
     * Send order details to admin
     * @param {Object} order - The order object
     */
    sendOrderEmail: async (order) => {
        if (!PUBLIC_KEY || PUBLIC_KEY.startsWith('YOUR')) {
            console.warn('EmailJS Public Key is missing. Email will not be sent.');
            return false;
        }

        const templateParams = {
            order_id: order.id,
            to_name: "Bhagwati Creations Admin",
            customer_name: order.customer.name,
            customer_email: order.customer.email,
            customer_phone: order.customer.phone,
            customer_address: `${order.customer.address}, ${order.customer.city}, ${order.customer.zip}`,
            order_total: `₹${order.total.toLocaleString()}`,
            order_items: order.items.map(item =>
                `${item.name} (Size: ${item.selectedSize || 'N/A'}) - ${item.price}`
            ).join('\n'),
            order_date: order.date
        };

        try {
            await emailjs.send(SERVICE_ID, ORDER_TEMPLATE_ID, templateParams, PUBLIC_KEY);
            return true;
        } catch (error) {
            console.error('Failed to send order email:', error);
            return false;
        }
    },

    /**
     * Send contact form message to admin
     * @param {Object} formData - The form data
     */
    sendContactEmail: async (formData) => {
        if (!PUBLIC_KEY || PUBLIC_KEY.startsWith('YOUR')) {
            console.warn('EmailJS Public Key is missing. Email will not be sent.');
            return false;
        }

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            reply_to: formData.email
        };

        try {
            await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, PUBLIC_KEY);
            return true;
        } catch (error) {
            console.error('Failed to send contact email:', error);
            return false;
        }
    }
};
