
import Image from "next/image";

import pic1 from "@/assets/about/aboucomputer.jpg";
import pic2 from "@/assets/about/AboutTrade.jpg";
import pic3 from "@/assets/about/Aboutsecuraty.jpg";
import pic4 from "@/assets/about/aboutcctv.png";

export default function About() {
    return (
        <div className="bg-[#111111] text-white py-12">
            <div className="w-full container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
                
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-3xl font-semibold mb-6">About Us</h2>
                    <p className="text-lg mb-6">
                        Tolfin Global Limited was born out of a simple idea: to make life easier and safer for those who are constantly on the move. With over five years of industry experience, we have built a strong network of partners, a team of highly skilled professionals, and a technology-driven operational framework.
                    </p>
                    <p className="text-lg">
                        Our journey has been shaped by the needs of our clients—corporate organizations, government agencies, diplomatic missions, and individuals who demand nothing but the best. We’ve learned that in a world where time is money and safety is non-negotiable, our clients need more than just a service provider—they need a partner they can trust. That’s exactly what we strive to be every day.
                    </p>
                </div>

                
                <div className="grid grid-cols-2 gap-4 w-full md:w-[500px]">
                    <div className="border-4 border-[#154047] rounded-lg overflow-hidden">
                        <Image
                            width={250}
                            height={250}
                            src={pic1} 
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="border-4 border-[#154047] rounded-lg overflow-hidden">
                        <Image
                            width={250}
                            height={250}
                            src={pic2} 
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="border-4 border-[#154047] rounded-lg overflow-hidden">
                        <Image
                            width={250}
                            height={250}
                            src={pic3} 
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="border-4 border-[#154047] rounded-lg overflow-hidden">
                        <Image
                            width={250}
                            height={250}
                            src={pic4} 
                            alt="image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

