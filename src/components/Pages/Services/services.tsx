// pages/index.js
import Image from 'next/image';
import image from '@/assets/about/pailoat.png';

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
                        <div key={index} className="bg-[#154047] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={image} // Replace with actual image URL
                                alt="Service"
                                width={500}
                                height={300}
                                className="object-cover w-full h-64"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Security Solutions & Armed Escort Services</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    Providing armed security for high-net-worth individuals, dignitaries, and sensitive events.
                                </p>
                                <div className="flex justify-center mt-4">
                                    <button className="text-[#94c2c9] px-6 py-2 rounded-2xl shadow-2xl bg-[#abe9f360] hover:bg-gray-600 transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
