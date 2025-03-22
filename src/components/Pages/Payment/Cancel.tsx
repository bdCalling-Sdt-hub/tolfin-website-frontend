"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import cancelImage from "@/assets/payment/cancle.webp";

const Cancel = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // Redirect the user back to their subscription management or home page
    router.push("/subscriptions"); // Or redirect to a relevant page
  };

  return (
    <div className="w-full h-full container py-36 text-center space-y-8">
      <Image src={cancelImage} alt="Payment Cancelled" className="w-72 h-56 mx-auto" />
      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-red-500">
        Subscription Cancellation
      </h1>
      <p className="mt-4 text-center text-gray-600">
        We&apos;re sorry, but your subscription payment was not completed successfully.
      </p>
      <div className="mt-4">
        <button
          onClick={handleGoBack}
          className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-200"
        >
          Go Back to Subscription Page
        </button>
      </div>
    </div>
  );
};

export default Cancel;
