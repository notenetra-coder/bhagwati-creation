import React from 'react';

const ReturnExchange = () => {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-serif text-[#ed2585] mb-8 text-center">Return & Exchange Policy</h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">7-Day Easy Returns</h2>
                    <p>
                        We want you to love what you buy! If you are not completely satisfied with your purchase, you can return or exchange it within <strong>7 days</strong> of delivery.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conditions for Return</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>The product must be unused, unwashed, and in its original condition with tags intact.</li>
                        <li>Sarees with stitched blouses or custom-tailored outfits are non-returnable.</li>
                        <li>Items bought during "Final Sale" or "Clearance" are not eligible for return.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Initiate a Return</h2>
                    <p>
                        To initiate a return, please email us at <strong>bhagwaticreationshelpdesk@gmail.com</strong> with your Order ID and reason for return.
                        Our team will verify your request and arrange a reverse pickup within 48 hours.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
                    <p>
                        Once we receive the returned item and it passes our quality check, the refund will be processed within 5-7 business days to your original payment method.
                        For COD orders, we will transfer the amount to your bank account or provide store credit.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ReturnExchange;
