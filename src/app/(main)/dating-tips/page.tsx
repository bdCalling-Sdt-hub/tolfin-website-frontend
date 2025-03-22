import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Dating Tips | 1Plus1 Dating website",
  description: "Dating Tips page",
  keywords: ["dating tips", "page", "example"],
};

const DatingTips = dynamic(() => import("@/components/Pages/DatingTips/DatingTips"));
const page = () => {
  return <DatingTips/>
};

export default page;
