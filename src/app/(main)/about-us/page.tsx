import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | 1Plus1 Dating website",
  description: "About us page",
  keywords: ["about us", "page", "example"],
};
const AboutUs = dynamic(() => import("@/components/Pages/AboutUs/AboutUs"));
const page = () => {
  return <AboutUs />;
};

export default page;
