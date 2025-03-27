

import Image from 'next/image';
import React from 'react';
import pailoat from '@/assets/choose/user.png';
import pail from '@/assets/choose/threuser.png';
import Frame from '@/assets/choose/locksetting.png';
import choo4se from '@/assets/choose/settingdoller.png';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

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
                    <div className="flex md:flex-row items-center bg-[#154047] p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3 border-2 border-[#A2E8E0] rounded-2xl">
                            <Image
                                width={150}
                                height={150}
                                src={pailoat}
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-4 w-2/3">
                            <div className="flex space-x-4">

                                <div className="text-white font-semibold text-lg">
                                    01 <br />
                                    SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center bg-[#154047] p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3 border-2 border-[#A2E8E0] rounded-2xl">
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

                                <div className="text-white font-semibold text-lg">
                                    02 <br />
                                    VIP PROTECTION & SECURE ESCORT SERVICES
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                Personalized protection services for high-profile clients, ensuring their safety and privacy while traveling or attending events.
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center bg-[#154047] p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3 border-2 border-[#A2E8E0] rounded-2xl">
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
                                
                                <div className="text-white font-semibold text-lg">
                                    03 <br />
                                    AIRPORT TRANSFERS & CUSTOMIZED TRAVEL PLANS
                                </div>
                            </div>
                            <div className="text-sm text-white mb-4">
                                We offer tailored travel plans, airport transfers, and personalized itineraries designed to meet your unique needs and preferences.
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center bg-[#154047] p-6 rounded-2xl shadow-xl space-x-6">
                        <div className="w-1/3 border-2 border-[#A2E8E0] rounded-2xl">
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
                                
                                <div className="text-white font-semibold text-lg">
                                    04 <br />
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
                <Link href="/bookingFrom"><button className="flex items-center gap-2 bg-[#154047] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                    Book Appointment
                    <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                        <FaArrowRight className="text-white" />
                    </div>
                </button></Link>
            </div>
        </div>
    );
};

export default ServiceSection;
