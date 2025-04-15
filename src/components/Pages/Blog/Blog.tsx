import Image from 'next/image';
import image from "@/assets/hero/blog.png"

export default function Blog() {
    return (
        <div className='bg-[#111111]'>
            <div className="w-full container text-white py-16">
                <div className='px-5'>
                    <h2 className="text-3xl font-bold mb-5 mt-10 text-center md:text-left">
                        Blog
                    </h2>
                    <p className='font-small text-gray-200 py-5'>Elite Security & Travel Solutions You Can Trust.Providing seamless VIP travel, <br /> security, and protocol services with professionalism and discretion.</p>
                </div>
                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card */}
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-[#44666C] rounded-[50px] overflow-hidden shadow-lg">
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
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}