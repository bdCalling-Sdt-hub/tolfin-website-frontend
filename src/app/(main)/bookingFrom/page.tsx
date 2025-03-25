 

import BookingFrom from "@/components/Pages/BookingFrom/BookingFrom";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Booking|Tolfi website",
  description: "Privacy Policy page",
  keywords: ["privacy policy", "page", "example"],
};
const page = () => {
  return <BookingFrom />;
};

export default page;