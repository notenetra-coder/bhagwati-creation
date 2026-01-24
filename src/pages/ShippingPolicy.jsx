import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-serif text-[#ed2585] mb-8 text-center">Shipping Policy</h1>

            <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Shipping Duration</h2>
                    <p>
                        We strive to deliver your products as quickly as possible.
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Standard Delivery:</strong> 5-7 business days.</li>
                            <li><strong>Express Delivery:</strong> 2-3 business days (available in select cities).</li>
                            <li><strong>Delhi/NCR:</strong> Next day delivery available.</li>
                        </ul>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Shipping Charges</h2>
                    <p>
                        We offer <strong>FREE Shipping</strong> on all prepaid orders above ₹2000.
                        For Cash on Delivery (COD) orders, a flat fee of ₹100 is applicable.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Tracking</h2>
                    <p>
                        Once your order is dispatched, you will receive a tracking link via SMS and Email.
                        You can also track your order status on our website under the 'Track Order' section.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. International Shipping</h2>
                    <p>
                        Yes, we ship globally! International shipping charges are calculated at checkout based on the weight of the package and the destination country.
                        Customs duties, if any, are to be borne by the customer.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ShippingPolicy;
