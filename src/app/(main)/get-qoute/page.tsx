
import Qoute from "@/components/Pages/Qoute/Qoute";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Qoute|Tolfi website",
  description: "Privacy Policy page",
  keywords: ["privacy policy", "page", "example"],
};
const page = () => {
  return <Qoute />;
};

export default page;