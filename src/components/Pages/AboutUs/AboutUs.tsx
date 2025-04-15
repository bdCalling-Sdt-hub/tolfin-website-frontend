"use client";
import React from "react";
import ServiceSection from "../Home/ServiceSession";
import ServiceSect from "../Home/Features";
import MeetSession from "../Home/MeetSession";
import Image from "next/image";

import pic1 from "@/assets/about/Frame 30.png";




const AboutUs = () => {
  return (
    <div className="bg-[#111111] text-white py-12">
      <div className="w-full  mt-20">
        {/* Hero Section */}
        <div className=" text-white py-12">
          <div className="w-full container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 ">
            {/* Left Side Content */}
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-6">About Us</h2>
              <p className="text-lg mb-6">
                Tolfin Global Limited was born out of a simple idea: to make life easier and safer for those who are constantly on the move. With over five years of industry experience, we have built a strong network of partners, a team of highly skilled professionals, and a technology-driven operational framework.
              </p>
              <p className="text-lg">
                Our journey has been shaped by the needs of our clients—corporate organizations, government agencies, diplomatic missions, and individuals who demand nothing but the best. We’ve learned that in a world where time is money and safety is non-negotiable, our clients need more than just a service provider—they need a partner they can trust. That’s exactly what we strive to be every day.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="flex w-full">

              <Image width={950} height={620} src={pic1} className="w-full h-full object-cover " alt="image" />

            </div>
          </div>
        </div>
        
        <MeetSession />
      </div>
    </div>
  );
};

export default AboutUs;
