

import Image from 'next/image';
import React from 'react';
import pailoat from '@/assets/choose/user.png';
import pail from '@/assets/choose/threuser.png';
import Frame from '@/assets/choose/locksetting.png';
import choo4se from '@/assets/choose/settingdoller.png';
import { FaArrowRight } from 'react-icons/fa';

const ServiceSection: React.FC = () => {
    return (
        <div className="w-full container py-16 px-4">
            <div className="flex flex-col">
                {/* Left Side Content */}
                <h1 className="text-4xl font-semibold text-white mb-4">WHY CHOOSE US</h1>
                <p className="text-lg text-gray-400 mb-8">
                    "Why Trust Tolfin Global?" <br />
                    With proven expertise, a highly trained team, and advanced technology, we deliver unmatched security and protocol service.
                </p>

                {/* Right Side Service Cards (4 Cards in Two Rows) */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="flex md:flex-row items-center bg-teal-800 p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3">
                            <Image
                                width={150}
                                height={150}
                                src={pailoat} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4 w-2/3">
                            <div className="flex space-x-4">
                                <span className="text-2xl font-bold text-white">01</span>
                                <div className="text-white font-semibold text-lg">
                                    SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center bg-teal-800 p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3">
                            <Image
                                width={150}
                                height={150}
                                src={pail} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4 w-2/3">
                            <div className="flex space-x-4">
                                <span className="text-2xl font-bold text-white">02</span>
                                <div className="text-white font-semibold text-lg">
                                    VIP PROTECTION & SECURE ESCORT SERVICES
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                Personalized protection services for high-profile clients, ensuring their safety and privacy while traveling or attending events.
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center bg-teal-800 p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3">
                            <Image
                                width={150}
                                height={150}
                                src={Frame} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4 w-2/3">
                            <div className="flex space-x-4">
                                <span className="text-2xl font-bold text-white">03</span>
                                <div className="text-white font-semibold text-lg">
                                    AIRPORT TRANSFERS & CUSTOMIZED TRAVEL PLANS
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                We offer tailored travel plans, airport transfers, and personalized itineraries designed to meet your unique needs and preferences.
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center bg-teal-800 p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3">
                            <Image
                                width={150}
                                height={150}
                                src={choo4se} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4 w-2/3">
                            <div className="flex space-x-4">
                                <span className="text-2xl font-bold text-white">04</span>
                                <div className="text-white font-semibold text-lg">
                                    EMERGENCY RESPONSE & SECURITY CONSULTATION
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                Offering emergency response services and expert consultation to address your security concerns effectively and promptly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Book Appointment Button */}
            <div className="flex justify-center mt-8">
                <button className="flex items-center gap-2 bg-[#154047] text-[#fbfdfd] px-6 py-3 rounded-lg shadow-md hover:bg-[#55a2ad] transition duration-300 ease-in-out">
                    Book Appointment <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ServiceSection;
