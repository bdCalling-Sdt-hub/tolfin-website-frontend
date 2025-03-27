
import Appointment from "@/components/Pages/Appoinment/AppoinmentFrom";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Book A service|Tolfi website",
  description: "Privacy Policy page",
  keywords: ["privacy policy", "page", "example"],
};
const page = () => {
  return <Appointment />;
};

export default page;