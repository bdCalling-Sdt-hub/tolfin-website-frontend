"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'; // Add icons for collapse/expand
import Group from "@/assets/about/Group .png"

export default function Question() {
    const [isOpen, setIsOpen] = useState(null);

    const toggleQuestion = (index: any) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="w-full container text-white lg:flex items-center justify-center pb-20 px-4 sm:px-4 ">

            <div className='w-full md:w-1/2'>
                <div className="flex flex-col items-start text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-gray-400 mb-8">
                        Elite Security & Travel Solutions You Can Trust. <br /> Providing services with professionalism and discretion.
                    </p>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="p-4">
                        <Image
                            width={250}
                            height={250}
                            src={Group} // Update with the correct path
                            alt="image"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Right side: FAQ content */}
            <div className="w-full md:w-3/3 lg:ml-8 bg-[#154047] p-5 rounded-3xl space-y-4">
                {['Can I see who reads my email campaigns?', 'Can I see who reads my email campaigns?', 'Can I see who reads my email campaigns?', 'Can I see who reads my email campaigns?'].map((question, index) => (
                    <div key={index} className="rounded-lg p-4 border-b-2 border-gray-600">
                        <button
                            className="w-full text-left text-xl font-semibold focus:outline-none flex justify-between items-center"
                            onClick={() => toggleQuestion(index)}
                        >
                            {question}
                            {isOpen === index ? <FaMinus /> : <FaPlus />} {/* Toggle icon */}
                        </button>
                        {isOpen === index && (
                            <div className="mt-2 text-gray-200">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

