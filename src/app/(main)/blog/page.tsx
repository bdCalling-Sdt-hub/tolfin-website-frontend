
 

import Blog from "@/components/Pages/Blog/Blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog|Tolfi website",
  description: "Privacy Policy page",
  keywords: ["privacy policy", "page", "example"],
};
const page = () => {
  return <Blog />;
};

export default page;