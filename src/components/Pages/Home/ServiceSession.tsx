import Image from 'next/image';
import React from 'react';
import pailoat from '@/assets/about/pailoat.png';
import pail from '@/assets/about/pailoat2.png';
import Frame from '@/assets/about/frame.png';
import { FaArrowRight } from 'react-icons/fa';

const ServiceSection: React.FC = () => {
    return (
        <div className='w-full container  '>
            <div className="flex justify-center items-center   ">
                {/* Left Side Content */}
                <div className="flex flex-col items-start text-white w-1/2">
                    <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
                    <p className="text-lg text-gray-400 mb-8">
                        Elite Security & Travel Solutions You Can Trust. Providing services with professionalism and discretion.
                    </p>

                    {/* Icon */}
                    <div className="flex items-center space-x-4">
                        <div className=" p-4  ">
                            <Image
                                width={250}
                                height={250}
                                src={Frame} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side Service Cards */}
                <div className="flex flex-col space-y-8 w-2/2">
                    {/* Card 1 */}
                    <div className="flex items-center bg-teal-800 p-6 rounded-2xl shadow-xl space-x-6">
                        {/* Left Side Image */}
                        <div className="w-1/3">
                            <Image
                                width={150}
                                height={150}
                                src={pailoat} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        {/* Right Side Content */}
                        <div className="flex flex-col items-start space-y-4 w-3/3">
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
                        {/* Left Side Image */}
                        <div className="w-1/3">
                            <Image
                                width={150}
                                height={150}
                                src={pailoat} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                        {/* Right Side Content */}
                        <div className="flex flex-col items-start space-y-4 w-3/3">
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


                </div>


            </div>

            <div className="flex justify-center mt-8">
                <button className="flex items-center gap-2 bg-[#154047] text-[#fbfdfd] px-6 py-3 rounded-lg shadow-md hover:bg-[#55a2ad] transition duration-300 ease-in-out">
                    Book Appointment <FaArrowRight />
                </button>
            </div>
        </div>



    );
};

export default ServiceSection;
