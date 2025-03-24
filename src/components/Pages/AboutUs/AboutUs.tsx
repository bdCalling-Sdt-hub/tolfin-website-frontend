"use client";
import React from "react";
import aboutUs from "@/assets/about/pailoat.png";

import DatingTips from "../DatingTips/DatingTips";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${aboutUs.src})` }}
        className="w-full h-[650px] bg-cover bg-center relative"
      >
        <div className="absolute inset-0  flex items-center justify-center p-5">
          <div className="w-full max-w-6xl mx-auto text-center text-white p-5 md:p-10 mt-0 md:mt-20 rounded-lg bg-black bg-opacity-60 space-y-5">
            <h1 className="text-xl md:text-3xl font-bold mb-5">About Us</h1>
            <p className="text-sm md:text-lg mb-2 flex flex-col gap">
              <span className="italic">
                Welcome to 1Plus1Dating where real people make real connections!
              </span>
              <br />
              <span>
                1Plus1Dating is a Christian Singles community where Christian{" "}
                <br />
                Singles “connect” for serious and valuable relationships.
              </span>
            </p>
            <p className="text-[13px] md:text-[15px]">
              Our community has been built to bring meaningful connections for
              serious relationships based on Christian principles. We value
              honesty and respect and have zero tolerance for immoral and
              disrespectful behavior. At 1Plus1 Dating, we understand that there
              is no better place than an online platform for Christians to feel
              free in Presenting themselves and making their values known.
              <br />
              <br />
              We at 1Plus1Dating are on a mission to connect you to the one that
              resonates with your value.
            </p>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="py-20 px-5 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed">
            At <span className="text-primary font-semibold">1Plus1Dating</span>
            , we are passionate about bringing people closer together and
            helping them find meaningful relationships. We’ve built this
            platform with the belief that everyone deserves to connect with
            someone who truly complements them.
            <br />
            <br />
            Our mission is to create a safe, supportive, and inclusive space
            where Christian Singles of all ages can meet, discover common
            values, and build lasting and serious relationships based on
            Christian principles. Every feature on{" "}
            <span className="text-primary font-semibold">1Plus1Dating</span> is
            designed with your needs in mind, making your journey toward finding
            the perfect match both seamless and enjoyable.
            <br />
            <br />
            Thank you for choosing{" "}
            <span className="text-primary font-semibold">1Plus1Dating</span>.
            We are excited to be part of your story!
          </p>
        </div>
      </div>

      <DatingTips />
      
    </div>
  );
};

export default AboutUs;
