"use client";
import Link from "next/link";
import successImage from "@/assets/payment/payment-success.gif";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import moment from "moment"; // Import moment
import getDurationText from "@/components/Shared/GetDurationText/GetDurationText";
import { Spin } from "antd";

const Success = () => {
  const user = useUser();

  console.log(user)

  // Format the subscription end date using moment.js
  const formattedEndDate = user?.currentSubscriptionEndDate
    ? moment(user?.currentSubscriptionEndDate).format(
        "DD MMM YYYY"
      ) // Format as "11 Jan 2025"
    : "";

  if (!user?.currentSubscription) {
    return <Spin size="large" />;
  }
  return (
    <div className="w-full h-full px-5 py-36 container text-center space-y-8 bg-white">
      <Image src={successImage} alt="Success" className="w-72 h-56 mx-auto" />
      {/* Title */}
      <h1 className="text-4xl font-semibold text-primary">
        Subscription Successful!
      </h1>
      <p className="text-xl text-gray-700">
        Thank you for subscribing to our service!
      </p>

      {/* Subscription Summary */}
      <div className="bg-gray-50 max-w-3xl mx-auto p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-medium text-gray-800">
          Subscription Summary
        </h2>
        <div className="flex justify-between text-gray-700">
          <span>Subscription ID:</span>
          <span className="font-semibold">
            # {user?.currentSubscription?._id}
          </span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Status:</span>
          <span className="font-semibold text-green-600">Active</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Subscription End Date:</span>
          <span className="font-semibold">{formattedEndDate}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Total Amount:</span>
          <span className="font-semibold">
            ${user?.currentSubscription?.subscriptionFee}/{" "}
            {getDurationText(user?.currentSubscription?.subscriptionDuration)}
          </span>
        </div>
      </div>
      {/* Confirmation Message */}
      <div>
        <p className="text-lg text-gray-700">
          Your subscription is active and will automatically renew on the next
          payment cycle. We will notify you prior to renewal.
        </p>
        <p className="mt-4 text-xl font-semibold text-gray-900">
          Thank you for being a valued subscriber!
        </p>
      </div>
      <div className="mt-4">
        <Link href="/">
          <button className="px-8 py-3 bg-primary text-white rounded-lg transition duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
