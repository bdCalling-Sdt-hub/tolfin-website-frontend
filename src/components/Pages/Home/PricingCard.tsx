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
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="w-full max-w-lg p-4 bg-[#154047] border border-gray-200 rounded-3xl shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Retainer Option</h3>
                        <p className="text-sm mb-6">
                            (For ongoing support and priority service)
                        </p>
                        <ul className="text-sm space-y-2">
                            <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                            <li>Dedicated account manager and priority access to our team.</li>
                        </ul>

                        <Link href="/bookingFrom"><button className="flex items-center gap-2 bg-[#42686e] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                            Book Appointment
                            <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                <FaArrowRight className="text-white" />
                            </div>
                        </button></Link>
                    </div>



                    <div className="w-full max-w-lg p-4 bg-[#154047] border border-gray-200 rounded-3xl shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Retainer Option</h3>
                        <p className="text-sm mb-6">
                            (For ongoing support and priority service)
                        </p>
                        <ul className="text-sm space-y-2">
                            <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                            <li>Dedicated account manager and priority access to our team.</li>
                        </ul>

                        <Link href="/bookingFrom"><button className="flex items-center gap-2 bg-[#42686e] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                            Book Appointment
                            <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                <FaArrowRight className="text-white" />
                            </div>
                        </button></Link>
                    </div>

                    <div className="w-full max-w-lg p-4 bg-[#154047] border border-gray-200 rounded-3xl shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Retainer Option</h3>
                        <p className="text-sm mb-6">
                            (For ongoing support and priority service)
                        </p>
                        <ul className="text-sm space-y-2">
                            <li>Fixed monthly fee ensuring guaranteed availability and proactive planning.</li>
                            <li>Dedicated account manager and priority access to our team.</li>
                        </ul>

                        <Link href="/bookingFrom"><button className="flex items-center gap-2 bg-[#42686e] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                            Book Appointment
                            <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                <FaArrowRight className="text-white" />
                            </div>
                        </button></Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
