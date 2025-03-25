
import Service from "@/components/Pages/Services/services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services|Tolfi website",
  description: "Privacy Policy page",
  keywords: ["privacy policy", "page", "example"],
};
const page = () => {
  return <Service />;
};

export default page;