
"use client";
import Image from "next/image";
import { useState } from "react";
import image1 from "@/assets/hero/holywood1.png";
import image2 from "@/assets/hero/hlywood2.png";
import image3 from "@/assets/hero/jonydev.png";
import image4 from "@/assets/hero/the rock.png";


const accordionData = [
  {
    title: "Cutting-Edge Curriculum",
    image: image1,
    subtitle:
      "I recently used Tolfin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with discreet and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!",
    colorBg: "bg-amber-500",
    colorBorder: "border-amber-500",
  },

  {
    title: "Job-Ready Focus",
    image: image2,
    subtitle:
      "I recently used Tolfin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with discreet and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!",
    colorBg: "bg-red-500",
    colorBorder: "border-red-500",
  },
  {
    title: "Collaborative Community",
    image: image3,
    subtitle:
      "I recently used Tolfin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with discreet and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!",
    colorBg: "bg-sky-500",
    colorBorder: "border-sky-500",
  },
  {
    title: "Collaborative Community",
    image: image4,
    subtitle:
      "I recently used Tolfin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with discreet and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!",
    colorBg: "bg-sky-500",
    colorBorder: "border-sky-500",
  },
];

const VerticalAccordion = () => {
  const [isActive, setIsActive] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx)); // Toggle the visibility of the item
  };

  return (
    <div className="w-full  hidden md:block">
      <div className='container'>
        <h2 className="text-3xl font-bold  mt-10 text-center md:text-left text-white">
          What they say about us
        </h2>
        <p className='font-small text-gray-600 py-5'>Hear from our satisfied users about their experiences and the value we bring.</p>
      </div>
      <div className="mx-auto my-24 md:my-10 flex w-fit rotate-90 shadow-md md:rotate-0">

        {accordionData.map((data, idx) => (
          <div key={idx} className="flex space-x-2">
            {/* Button to toggle accordion state */}
            <button
              onClick={() => handleToggle(idx)}
              className={`${isActive === idx ? "hidden" : ""
                } flex h-full w-fit items-end rounded-[200px] bg-[#154047] ml-2`}
            >
              <Image src={data.image} alt="image" className="lg:w-[200px] h-full rounded-[300px] p-5 object-cover" />
            </button>

            {/* Accordion Content Section */}
            <div
              className={`grid place-content-center ${isActive === idx
                ? "opacity-1 w-[220px] xl:w-[970px] px-5 rounded-[50px] translate-x-0"
                : "w-0 scale-0 opacity-0 translate-x-[100%]"
                }  duration-1000 ease-in-out -z-20 -rotate-90 bg-[#154047] text-black md:rotate-0`}
            >
              <div className="flex items-center mr-1 ">
                {/* Conditional Rendering for Text content after clicking */}
                {isActive === idx && (
                  <>
                    {/* Show the image again inside this div */}
                    <div className="mb-4">
                      <Image
                        src={data.image} // Replace with different images for each section
                        alt="image"
                        // width={100}
                        // height={100}
                        className="w-[1000px] h-[400px] rounded-[50px] p-5  object-fill"
                      />
                    </div>
                    <div>
                      <h2 className="font-black dark:text-black lg:text-2xl ">{data?.title}</h2>
                      <p className="dark:text-gray-500 ">{data?.subtitle}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalAccordion;



