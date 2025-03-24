"use client"
import { useState } from 'react';
import Group from "@/assets/about/Group .png"
import Image from 'next/image';

export default function Question() {
    const [isOpen, setIsOpen] = useState(null);

    const toggleQuestion = (index: any) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="w-full container text-white min-h-screen flex items-center justify-center p-6">

            <div className="flex flex-col items-start text-white w-1/2">
                <h1 className="text-4xl font-semibold mb-4">Frequently Ask Question</h1>
                <p className="text-lg text-gray-400 mb-8">
                    Elite Security & Travel Solutions You Can Trust. <br /> Providing services with professionalism and discretion.
                </p>

                {/* Icon */}
                <div className="flex items-center space-x-4">
                    <div className=" p-4  ">
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
            <div className="w-2/3 ml-8 bg-[#154047]  p-10 rounded-3xl">


                <div className="space-y-4">
                    {['Can I see who reads my email campaigns?', 'Can I see who reads my email campaigns?', 'Can I see who reads my email campaigns?', 'Can I see who reads my email campaigns?'].map((question, index) => (
                        <div key={index} className=" rounded-lg p-4">
                            <button
                                className="w-full text-left text-xl font-semibold focus:outline-none"
                                onClick={() => toggleQuestion(index)}
                            >
                                {question}
                            </button>
                            {isOpen === index && (
                                <div className="mt-2 text-gray-200">
                                    <p>This is the answer to the question.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

