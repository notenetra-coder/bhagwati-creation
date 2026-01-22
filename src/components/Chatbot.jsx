import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm your Bhagwati Creations assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // "Trained" Knowledge Base (Heuristic Engine)
    const getBotResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        // Greetings
        if (lowerQuery.match(/\b(hi|hello|hey|greetings|start)\b/)) {
            return "Hello! Welcome to Bhagwati Creations. Looking for something special today?";
        }

        // About the Brand
        if (lowerQuery.includes('bhagwati') || lowerQuery.includes('who are you') || lowerQuery.includes('about us')) {
            return "Bhagwati Creations is a premium ethnic wear brand offering a wide range of Sarees, Lehengas, Suits, and more, blending tradition with modern elegance.";
        }

        // Product Queries
        if (lowerQuery.includes('saree') || lowerQuery.includes('saris')) {
            return "We have a beautiful collection of Sarees including Silk, Georgette, Chiffon, and Designer Party Wear. Check out our 'Sarees' category!";
        }
        if (lowerQuery.includes('lehenga') || lowerQuery.includes('lengha')) {
            return "Our Lehengas are perfect for weddings and festivals! We have Bridal, Bridesmaid, and Party wear Lehengas.";
        }
        if (lowerQuery.includes('suit') || lowerQuery.includes('salwar')) {
            return "Explore our comfortable and stylish Suits, from Anarkalis to Straight cut designs.";
        }
        if (lowerQuery.includes('kurti') || lowerQuery.includes('tunic')) {
            return "Our Kurtis are perfect for daily wear and office chic. Browse our latest collection.";
        }
        if (lowerQuery.includes('gown') || lowerQuery.includes('dress')) {
            return "Looking for something western with an ethnic touch? Our Gowns are just what you need.";
        }
        if (lowerQuery.includes('men') || lowerQuery.includes('kurta')) {
            return "While we specialize in women's ethnic wear, we also have a curated collection of Men's Kurtas and Sherwanis.";
        }
        if (lowerQuery.includes('video') || lowerQuery.includes('call')) {
            return "You can shop via Video Call! Check out our 'Video Shopping' section to book an appointment.";
        }

        // Policies (Shipping, Returns, Payments)
        if (lowerQuery.includes('shipping') || lowerQuery.includes('delivery') || lowerQuery.includes('ship')) {
            return "We offer FREE shipping on all orders above ₹5000! Standard delivery takes 5-7 business days.";
        }
        if (lowerQuery.includes('return') || lowerQuery.includes('exchange') || lowerQuery.includes('refund')) {
            return "We have a 7-day easy return policy. If you don't love it, you can return it! (Terms apply).";
        }
        if (lowerQuery.includes('payment') || lowerQuery.includes('cod') || lowerQuery.includes('cash')) {
            return "We accept all major Credit/Debit cards, UPI, and Net Banking. Cash on Delivery (COD) is available for select pin codes.";
        }
        if (lowerQuery.includes('track') || lowerQuery.includes('order')) {
            return "To track your order, please visit the 'My Orders' section in your account or check your email for the tracking link.";
        }

        // Contact
        if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('email') || lowerQuery.includes('support')) {
            return "You can reach us at support@bhagwaticreations.com or call us at +91-9876543210 (Mon-Sat, 10am - 7pm).";
        }
        if (lowerQuery.includes('store') || lowerQuery.includes('location') || lowerQuery.includes('address')) {
            return "Our flagship store is located in Surat, Gujarat. Come visit us!";
        }

        // Closing
        if (lowerQuery.includes('thank') || lowerQuery.includes('bye')) {
            return "You're welcome! Happy Shopping! ✨";
        }

        // Fallback
        return "I'm sorry, I didn't quite catch that. I can help with Products, Shipping, Returns, or Order status. Please try asking differently!";
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate thinking delay
        setTimeout(() => {
            const botResponseText = getBotResponse(input);
            setMessages(prev => [...prev, { text: botResponseText, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            {(isOpen && !isMinimized) && (
                <div className="pointer-events-auto bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 mb-4 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-primary p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <MessageCircle size={18} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Bhagwati Assistant</h3>
                                <p className="text-[10px] opacity-80 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span> Online
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                                <Minus size={16} />
                            </button>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 bg-gray-100 text-sm px-4 py-2.5 rounded-full focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-gray-700 placeholder:text-gray-400"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="bg-primary text-white p-2.5 rounded-full hover:bg-primary-dark transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-md"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Minimized State Bubble */}
            {isMinimized && isOpen && (
                <div className="pointer-events-auto bg-white p-3 rounded-full shadow-xl border border-gray-100 mb-4 flex items-center gap-3 animate-in slide-in-from-bottom-2 cursor-pointer hover:shadow-2xl transition-all" onClick={() => setIsMinimized(false)}>
                    <div className="bg-primary/10 p-2 rounded-full">
                        <MessageCircle size={20} className="text-primary" />
                    </div>
                    <div className="pr-2">
                        <p className="text-xs font-semibold text-gray-800">Chat with us</p>
                        <p className="text-[10px] text-gray-500 truncate max-w-[100px]">How can I help?</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }} className="text-gray-400 hover:text-gray-600">
                        <X size={14} />
                    </button>
                </div>
            )}


            {/* Launcher Button */}
            {!isOpen && (
                <button
                    onClick={() => { setIsOpen(true); setIsMinimized(false); }}
                    className="pointer-events-auto bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 hover:scale-110 group relative"
                >
                    <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                </button>
            )}
        </div>
    );
};

export default Chatbot;
