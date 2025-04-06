// // components/TestimonialSection.tsx

// "use client"
// import { useState } from 'react';
// import Image, { StaticImageData } from 'next/image';
// import hollywood from '@/assets/hero/holywood1.png';
// import hollywood2 from '@/assets/hero/hlywood2.png';
// import hollywood3 from '@/assets/hero/the rock.png';
// import hollywood4 from '@/assets/hero/jonydev.png';

// const TestimonialSection = () => {
//   const [selectedImage, setSelectedImage] = useState(hollywood); // Default large image

//   const handleThumbnailClick = (image: StaticImageData) => {
//     setSelectedImage(image); // Update the main image when a thumbnail is clicked
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-900">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="flex space-x-6">
//           {/* Main Image */}
//           <div className="relative h-[35rem] w-[35rem] overflow-hidden shadow-lg shadow-black/30">
//             <Image
//               className="h-full object-cover"
//               src={selectedImage}
//               alt="Main testimonial image"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex flex-row space-y-4">
//             {/* Thumbnail 1 */}
//             <div
//               className="relative h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[100px] shadow-lg"
//               onClick={() => handleThumbnailClick(hollywood)}
//             >
//               <Image
//                 className="h-full w-full object-cover"
//                 src={hollywood}
//                 alt="Small testimonial 1"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

//             {/* Thumbnail 2 */}
//             <div
//               className="relative  h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[100px] shadow-lg"
//               onClick={() => handleThumbnailClick(hollywood2)}
//             >
//               <Image
//                 className="h-full w-full object-cover"
//                 src={hollywood2}
//                 alt="Small testimonial 2"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

//             {/* Thumbnail 3 */}
//             <div
//               className="relative  h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[40px] shadow-lg"
//               onClick={() => handleThumbnailClick(hollywood3)}
//             >
//               <Image
//                 className="h-full w-full object-cover"
//                 src={hollywood3}
//                 alt="Small testimonial 3"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

//             {/* Thumbnail 4 */}
//             <div
//               className="relative  h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[100px] shadow-lg"
//               onClick={() => handleThumbnailClick(hollywood4)}
//             >
//               <Image
//                 className="h-full w-full object-cover"
//                 src={hollywood4}
//                 alt="Small testimonial 4"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Testimonial */}
//         <div className="mt-6 text-center text-white">
//           <p className="text-lg font-semibold">
//             I recently used Tolfin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with discreet and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!
//           </p>
//           <h4 className="mt-4 text-2xl font-bold">Johnny Depp</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;




"use client";
import { useState } from "react";

const accordionData = [
  {
    title: "Cutting-Edge Curriculum",
    subtitle: "Learn the latest industry skills with HTML, CSS, and Tailwind CSS.",
    colorBg: "bg-amber-500",
    colorBorder: "border-amber-500",
  },
  
  {
    title: "Job-Ready Focus",
    subtitle: "Master the skills employers demand and enter the job market with confidence.",
    colorBg: "bg-red-500",
    colorBorder: "border-red-500",
  },
  {
    title: "Collaborative Community",
    subtitle: "Join a supportive, interactive network that enhances your learning journey.",
    colorBg: "bg-sky-500",
    colorBorder: "border-sky-500",
  },
 
];

const VerticalAccordion = () => {
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (idx: any) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="mx-auto my-24 md:my-10 flex w-fit rotate-90 shadow-md min-h-[220px] md:min-h-[300px] md:rotate-0 ">
      {accordionData?.map((data, idx) => (
        <div key={idx} className="flex">
          <button
            onClick={() => handleToggle(idx)}
            className={` flex h-full w-fit items-end border-b-8 bg-[#00BBA6] pb-10 dark:bg-[##00BBA6] ${data?.colorBorder} shadow-[2px_2px_5px_#00000083]`}
          >
            <div
              className={`size-10 text-white md:size-16 ${data?.colorBg} relative flex items-center justify-center `}
            >
              <span
                className={`h-0 w-0 ${data?.colorBorder} dark:${data?.colorBorder} absolute left-8 -z-10 hidden  rotate-[225deg] rounded-lg border-b-[60px] border-r-[60px] border-r-transparent md:block`}
              ></span>
              <span className="-rotate-90 md:rotate-0">0{idx + 1}</span>
            </div>
          </button>
          <div
            className={`grid place-content-center ${isActive === idx ? "opacity-1 scale-1 w-[220px] md:w-[380px] px-5" : "w-0 scale-0 opacity-0"} -z-20  -rotate-90 bg-white text-black duration-300 ease-in-out dark:bg-[#ffff] md:rotate-0`}
          >
            <h2 className="font-black dark:text-black lg:text-2xl ">{data?.title}</h2>
            <p className="dark:text-gray-500 ">{data?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalAccordion;

