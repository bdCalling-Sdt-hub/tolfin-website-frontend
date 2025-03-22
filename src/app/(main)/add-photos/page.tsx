import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Add Photo | 1Plus1 Dating website",
  description: "Add Photo page",
  keywords: ["add photo", "page", "example"],
};
const AddPhoto = dynamic(() => import("@/components/Pages/AddPhoto/AddPhoto"));
const page = () => {
  return <AddPhoto />;
};

export default page;
