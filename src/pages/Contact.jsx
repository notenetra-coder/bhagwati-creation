import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { EmailService } from '../services/email';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailSent = await EmailService.sendContactEmail({
            ...formData,
            message: formData.message // Ensure mapping matches service expectation
        });

        if (emailSent) {
            alert(`Thank you, ${formData.firstName}! We have received your message and will contact you shortly.`);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } else {
            alert(`Thank you, ${formData.firstName}! Message saved locally (Email notification failed - verify configuration).`);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#ed2585]">Contact Us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We'd love to hear from you! Whether you have a question about our collections,
                    pricing, or anything else, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div className="w-full md:w-1/3 bg-[#fff0f5] p-8 rounded-lg shadow-sm h-fit">
                    <h2 className="text-2xl font-serif mb-8 border-b border-[#ed2585] pb-2 inline-block">Get In Touch</h2>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[#ed2585]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Phone</h3>
                                <p className="text-gray-600 mt-1">+91 90137 76435</p>
                                <p className="text-xs text-gray-500 mt-1">Mon-Sat 9am to 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[#ed2585]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email</h3>
                                <p className="text-gray-600 mt-1">bhagwaticreationshelpdesk@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[#ed2585]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Office</h3>
                                <p className="text-gray-600 mt-1">
                                    G-29/ 1 Sector -3,<br />
                                    Rohini, Near Sector-3 Bus Stand & Mother Divine Public School,<br />
                                    Delhi - 110085
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-[#ed2585]">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                                <p className="text-gray-600 mt-1">Monday - Saturday</p>
                                <p className="text-gray-600 mt-1">10:00 AM - 07:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input
                                    required
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#ed2585] transition-colors"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input
                                    required
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#ed2585] transition-colors"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#ed2585] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#ed2585] transition-colors"
                                    placeholder="+91 90137 76435"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#ed2585] transition-colors"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-4 rounded font-medium hover:bg-[#ed2585] transition-colors uppercase tracking-wider text-sm w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
