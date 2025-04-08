// pages/index.js
import Image from 'next/image';
import image from '@/assets/about/pailoat.png';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Service() {
    return (
        <div className='bg-[#111111]'>
            <div className="w-full container text-white py-16">
                <div className='px-5'>
                    <h2 className="text-3xl font-bold mb-12 mt-10 text-center md:text-left">
                        Our Services
                    </h2>
                    <p className='font-small text-gray-600 py-5'>Elite Security & Travel Solutions You Can Trust.Providing seamless VIP travel, <br /> security, and protocol services with professionalism and discretion.</p>
                </div>
                <div className="w-full container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card */}
                    {[...Array(9)].map((_, index) => (
                        <div key={index} className="bg-[#154047] w-full  rounded-[50px] overflow-hidden shadow-lg">
                            <Image
                                src={image} // Replace with actual image URL
                                alt="Service"
                                width={500}
                                height={300}
                                className="object-cover w-full h-64 rounded-[60px] p-3"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Security Solutions & Armed Escort Services</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    Providing armed security for high-net-worth individuals, dignitaries, and sensitive events.
                                </p>
                                <div className="flex justify-center mt-4">
                                    <Link href="/bookingFrom"><button className="border  border-[#627F84] flex items-center gap-2 bg-[#154047] text-[#A2E8E0] rounded-[10px] shadow-[50px] py-2 px-6 hover:bg-opacity-80 transition-all">
                                        Book Appointment
                                        <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
                                            <FaArrowRight className="text-white" />
                                        </div>
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
