


"use client";
import Image from "next/image";
import { useState } from "react";
import image1 from "@/assets/hero/holywood1.png";
import image2 from "@/assets/hero/holywood2.png";
import image3 from "@/assets/hero/holywood3.png";

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


            className={` flex h-full w-fit items-end border-b-8 rounded-[50px] bg-[#154047] `}
          >
            <Image src={image1} alt="image"  className="w-[200px] h-full rounded-[300px] px-5" />
          </button>
          <div
            className={`grid place-content-center ${isActive === idx ? "opacity-1 scale-1 w-[220px] md:w-[380px] px-5 rounded-[50px]" : "w-0 scale-0 opacity-0"} -z-20  -rotate-90 bg-[#154047] text-black duration-300 ease-in-out  md:rotate-0`}
          >
            <div className="flex items-center gap-5  ">
              <div>
                <Image src={image1} alt="image" width={100} height={100} className="w-20 h-20 rounded-full" />
              </div>
              <div>
                <h2 className="font-black dark:text-black lg:text-2xl ">{data?.title}</h2>
                <p className="dark:text-gray-500 ">{data?.subtitle}</p>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalAccordion;




