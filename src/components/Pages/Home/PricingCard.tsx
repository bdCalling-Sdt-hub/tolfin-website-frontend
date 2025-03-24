 

export default function PricingCard() {
    return (
        <section className=" py-12 px-4 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-5">Pricing Structure</h2>
                <p className="text-xl mb-4">"Flexible & Transparent Pricing"</p>
                <p className="text-lg mb-12">
                    Choose from retainer plans or on-demand services to match your specific needs and budget.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-[#154047] p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4">Retainer Option</h3>
                        <p className="text-sm mb-6">
                            (For ongoing support and priority service)
                        </p>
                        <ul className="text-sm space-y-2">
                            <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                            <li>Dedicated account manager and priority access to our team.</li>
                        </ul>
                        <button className="mt-6 py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300">
                            Book Appointment
                        </button>
                    </div>

                    <div className="bg-[#154047] p-6 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Ad-Hoc or On-Demand Option</h3>
                        <p className="text-sm mb-6">
                            Pay-as-you-go model with transparent hourly rates and project-based pricing.
                        </p>
                        <ul className="text-sm space-y-2">
                            <li>Ideal for short-term needs or emergency response services.hourly rates and project-based pricing.</li>
                        </ul>
                        <button className="mt-6 py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                            Book Appointment
                        </button>
                    </div>

                    <div className="bg-[#154047] p-6 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Retainer Option</h3>
                        <p className="text-sm mb-6">
                            (For ongoing support and priority service)
                        </p>
                        <ul className="text-sm space-y-2">
                            <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                            <li>Dedicated account manager and priority access to our team.</li>
                        </ul>
                        <button className="mt-6 py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
