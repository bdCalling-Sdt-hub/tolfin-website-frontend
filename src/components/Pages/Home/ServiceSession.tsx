// import Image from 'next/image';
// import React from 'react';
// import pailoat from '@/assets/about/pailoat.png';
// import pail from '@/assets/about/pailoat2.png';
// import Frame from '@/assets/about/frame.png';
// import { FaArrowRight } from 'react-icons/fa';
// import Link from 'next/link';

// const ServiceSection: React.FC = () => {
//     return (
//         <div className='w-full container px-4'>
//             <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12">
//                 {/* Left Side Content */}
//                 <div className="flex flex-col items-start text-white w-full lg:w-1/2">
//                     <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
//                     <p className="text-lg text-gray-400 mb-8">
//                         Elite Security & Travel Solutions You Can Trust. <br />Providing services with professionalism and discretion.
//                     </p>

//                     {/* Icon */}
//                     <div className="flex items-center space-x-4">
//                         <div className="p-4">
//                             <Image
//                                 width={250}
//                                 height={250}
//                                 src={Frame} // Update with the correct path
//                                 alt="image"
//                                 className="w-full h-full object-cover rounded-[50px]"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side Service Cards */}
//                 <div className="flex flex-col space-y-8 w-full lg:w-1/2">
//                     {/* Card 1 */}
//                     <div className="flex flex-col md:flex-row items-center bg-[#154047] p-2 rounded-[50px] shadow-xl space-y-4 md:space-y-0 md:space-x-6">
//                         {/* Left Side Image */}
//                         <div className="w-1/3">
//                             <Image
//                                 width={150}
//                                 height={150}
//                                 src={pailoat} // Update with the correct path
//                                 alt="image"
//                                 className="w-full h-full object-cover rounded-[50px]"
//                             />
//                         </div>
//                         {/* Right Side Content */}
//                         <div className="flex flex-col items-start space-y-4 w-full">
//                             <div className="flex space-x-4">
//                                 <span className="text-2xl font-bold text-white">01</span>
//                                 <div className="text-white font-semibold text-lg">
//                                     SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
//                                 </div>
//                             </div>
//                             <div className="text-sm text-white mb-4">
//                                 Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
//                             </div>
//                         </div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="flex flex-col md:flex-row items-center bg-[#154047] p-2 rounded-[50px] shadow-3xl space-y-4 md:space-y-0 md:space-x-6">
//                         {/* Left Side Image */}
//                         <div className="w-1/3">
//                             <Image
//                                 width={150}
//                                 height={150}
//                                 src={pailoat} // Update with the correct path
//                                 alt="image"
//                                 className="w-full h-full object-cover rounded-[50px]"
//                             />
//                         </div>
//                         {/* Right Side Content */}
//                         <div className="flex flex-col items-start space-y-4 w-full">
//                             <div className="flex space-x-4">
//                                 <span className="text-2xl font-bold text-white">02</span>
//                                 <div className="text-white font-semibold text-lg">
//                                     SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
//                                 </div>
//                             </div>
//                             <div className="text-sm text-white mb-4">
//                                 Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Book Appointment Button */}
//             <div className="flex justify-center mt-8">
//                 <Link href="/bookingFrom"><button className="flex items-center gap-2 bg-[#154047] text-[#A2E8E0] rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
//                     Book Appointment
//                     <div className="bg-[#0b2e2b9d] w-10 h-10 rounded-lg flex items-center justify-center">
//                         <FaArrowRight className="text-white" />
//                     </div>
//                 </button></Link>
//             </div>
//         </div>
//     );
// };

// export default ServiceSection;



import Image from 'next/image';
import React from 'react';
import pailoat from '@/assets/about/pailoat.png';
import pail from '@/assets/about/pailoat2.png';
import Frame from '@/assets/about/frame.png';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ServiceSection: React.FC = () => {
    return (
        <div className='w-full container px-4'>
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Left Side Content */}
                <div className="flex flex-col items-start text-white w-full lg:w-1/2">
                    <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
                    <p className="text-lg text-gray-400 mb-8">
                        Elite Security & Travel Solutions You Can Trust. <br />Providing services with professionalism and discretion.
                    </p>

                    {/* Icon */}
                    <div className="flex items-center space-x-4">
                        <div className="p-4">
                            <Image
                                width={250}
                                height={250}
                                src={Frame} // Update with the correct path
                                alt="image"
                                className="w-full h-full object-cover rounded-[50px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side Service Cards */}
                <div className="flex flex-col space-y-8 w-full lg:w-2/2">
                    {/* Scrollable Container */}
                    <div className="overflow-y-auto max-h-[550px]  scrollbar-hide  display-none">
                        {/* Card 1 */}
                        <div className="mt-2  flex flex-col md:flex-row items-center bg-[#154047] p-2 border border-[#627F84] rounded-[50px] shadow-xl space-y-4 md:space-y-0 md:space-x-6">
                            {/* Left Side Image */}
                            <div className="w-1/3">
                                <Image
                                    width={150}
                                    height={150}
                                    src={pailoat} // Update with the correct path
                                    alt="image"
                                    className="w-full h-auto object-cover rounded-[50px]"
                                />
                            </div>
                            {/* Right Side Content */}
                            <div className="flex flex-col items-start space-y-4 w-full">
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
                        <div className="mt-4 flex flex-col md:flex-row items-center bg-[#154047] border border-[#627F84] p-2 rounded-[50px] shadow-xl space-y-4 md:space-y-0 md:space-x-6">
                            {/* Left Side Image */}
                            <div className="w-1/3">
                                <Image
                                    width={150}
                                    height={150}
                                    src={pailoat} // Update with the correct path
                                    alt="image"
                                    className="w-full h-full object-cover rounded-[50px]"
                                />
                            </div>
                            {/* Right Side Content */}
                            <div className="flex flex-col items-start space-y-4 w-full">
                                <div className="flex space-x-4">
                                    <span className="text-2xl font-bold text-white">02</span>
                                    <div className="text-white font-semibold text-lg">
                                        SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
                                    </div>
                                </div>
                                <div className="text-sm text-white mb-4">
                                    Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row items-center bg-[#154047] border border-[#627F84] p-2 rounded-[50px] shadow-xl space-y-4 md:space-y-0 md:space-x-6">
                            {/* Left Side Image */}
                            <div className="w-1/3">
                                <Image
                                    width={150}
                                    height={150}
                                    src={pailoat} // Update with the correct path
                                    alt="image"
                                    className="w-full h-full object-cover rounded-[50px]"
                                />
                            </div>
                            {/* Right Side Content */}
                            <div className="flex flex-col items-start space-y-4 w-full">
                                <div className="flex space-x-4">
                                    <span className="text-2xl font-bold text-white">03</span>
                                    <div className="text-white font-semibold text-lg">
                                        SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
                                    </div>
                                </div>
                                <div className="text-sm text-white mb-4">
                                    Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row items-center bg-[#154047] border border-[#627F84] p-2 rounded-[50px] shadow-xl space-y-4 md:space-y-0 md:space-x-6">
                            {/* Left Side Image */}
                            <div className="w-1/3">
                                <Image
                                    width={150}
                                    height={150}
                                    src={pailoat} // Update with the correct path
                                    alt="image"
                                    className="w-full h-full object-cover rounded-[50px]"
                                />
                            </div>
                            {/* Right Side Content */}
                            <div className="flex flex-col items-start space-y-4 w-full">
                                <div className="flex space-x-4">
                                    <span className="text-2xl font-bold text-white">04</span>
                                    <div className="text-white font-semibold text-lg">
                                        SECURE JOURNEY MANAGEMENT & AIRPORT MEET AND GREET
                                    </div>
                                </div>
                                <div className="text-sm text-white mb-4">
                                    Reliable and discreet travel logistics for executives, VIPs, and government officials. 24/7 support to ensure smooth travel experiences with minimal delays.
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row items-center bg-[#154047] border border-[#627F84] p-2 rounded-[50px] shadow-xl space-y-4 md:space-y-0 md:space-x-6">
                            {/* Left Side Image */}
                            <div className="w-1/3">
                                <Image
                                    width={150}
                                    height={150}
                                    src={pailoat} // Update with the correct path
                                    alt="image"
                                    className="w-full h-full object-cover rounded-[50px]"
                                />
                            </div>
                            {/* Right Side Content */}
                            <div className="flex flex-col items-start space-y-4 w-full">
                                <div className="flex space-x-4">
                                    <span className="text-2xl font-bold text-white">05</span>
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
            </div>

            {/* Book Appointment Button */}
            <div className="flex justify-center mt-8">
                <Link href="/bookingFrom">
                    <button className="flex items-center w-[300px] h-[76px] gap-2 bg-[#154047] border border-[#40eedf9d]  rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                        <h2 className="text-xl text-white mr-5">Book Appointment</h2>
                        <div className="bg-[#3ac7bb9d] w-10 h-10 rounded-lg flex items-center justify-center ">
                            <FaArrowRight className="text-white justify-end" />
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;
