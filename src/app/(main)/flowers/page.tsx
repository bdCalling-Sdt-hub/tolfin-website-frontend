import Flowers from "@/components/Pages/Flowers/Flowers";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Flower | 1Plus1 Dating website",
  description: "Flower page",
  keywords: ["flower", "page", "example"],
};

const page = () => {
  return <Flowers />;
};

export default page;
