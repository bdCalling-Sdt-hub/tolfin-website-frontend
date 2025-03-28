import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


export default function PricingCard() {
    return (
        <section className=" py-12   text-white">
            <div className="w-full container mx-auto">
                <h2 className="text-3xl font-semibold mb-5">Pricing Structure</h2>
                <p className="text-xl mb-4">"Flexible & Transparent Pricing"</p>
                <p className="text-lg mb-12">
                    Choose from retainer plans or on-demand services to match your specific needs and budget.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Retainer Option Card */}
                    <div className="w-full max-w-[552px] h-[580px] mx-auto bg-[#154047] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6  pb-2">
                                Retainer Option (For ongoing support and priority service)
                            </h2>

                            <p className="border-b-2 border-[#A2E8E0] mt-5 mb-5"></p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                                <li>Dedicated account manager and priority access to our team.</li>
                                <li>Dedicated account manager and priority access to our team.</li>
                                <li>Dedicated account manager and priority access to our team.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/bookingForm">
                                <button className="flex items-center gap-2 bg-[#42686e] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                                    Book Appointment
                                    <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                        <FaArrowRight className="text-white" />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Ad-Hoc or On-Demand Option Card */}
                    <div className="w-full max-w-[552px] h-[580px] mx-auto bg-[#154047] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6  pb-2">
                                Ad-Hoc or On-Demand Option
                            </h2>
                            <p className="border-b-2 border-[#A2E8E0] mt-5 mb-5"></p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Pay-as-you-go model with transparent hourly rates and project-based pricing.</li>
                                <li>Ideal for short-term needs or emergency response services.</li>
                                <li>Ideal for short-term needs or emergency response services.</li>
                                <li>Ideal for short-term needs or emergency response services.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/bookingForm">
                                <button className="flex items-center gap-2 bg-[#42686e] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                                    Book Appointment
                                    <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                        <FaArrowRight className="text-white" />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Retainer Option Card */}
                    <div className="w-full max-w-[552px] h-[580px] mx-auto bg-[#154047] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6  pb-2">
                                Retainer Option (For ongoing support and priority service)
                            </h2>
                            <p className="border-b-2 border-[#A2E8E0] mt-5 mb-5"></p>

                            <ul className="list-disc pl-6 mb-6">
                                <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                                <li>Dedicated account manager and priority access to our team.</li>
                                <li>Dedicated account manager and priority access to our team.</li>
                                <li>Dedicated account manager and priority access to our team.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/bookingForm">
                                <button className="flex items-center gap-2 bg-[#42686e] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                                    Book Appointment
                                    <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                        <FaArrowRight className="text-white" />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
