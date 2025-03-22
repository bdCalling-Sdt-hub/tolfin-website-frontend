"use client";
import getDurationText from "@/components/Shared/GetDurationText/GetDurationText";
import {
  useGetAllSubscriptionQuery,
  useGetMySubscriptionQuery,
} from "@/redux/features/subscription/subscriptionApi";
import { IMySubscription } from "@/types/mySubscription";
import moment from "moment";

import React from "react";
import MySubscriptionCardSkeleton from "./MySubscriptionCardSkeleton";
import { ISubscription } from "@/types/subscription";
import SubscriptionCard from "../Subscriptions/SubscriptionCard";
import SubscriptionCardSkeleton from "../Subscriptions/SubscriptionCardSkeleton";

const MySubscription = () => {
  const { data: responseData, isLoading } =
    useGetMySubscriptionQuery(undefined);

  const myAllSubscription = responseData?.data?.attributes?.results;
  const { data: res, isLoading: subscriptionLoading } =
    useGetAllSubscriptionQuery(undefined);
  const allSubscription = res?.data?.attributes?.results;

  let subscriptionContent = null;
  if (subscriptionLoading) {
    subscriptionContent = (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <SubscriptionCardSkeleton key={idx} />
          ))}
      </div>
    );
  } else if (allSubscription?.length <= 0) {
    subscriptionContent = (
      <h1 className="text-2xl font-semibold text-center">
        No Subscriptions Found
      </h1>
    );
  } else if (allSubscription?.length > 0) {
    subscriptionContent = (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {allSubscription?.map((plan: ISubscription, index: number) => (
          <SubscriptionCard key={index} index={index} plan={plan} />
        ))}
      </div>
    );
  }

  // Assuming the first subscription is the current one
  const currentSubscription = myAllSubscription?.[0];

  // Check if the current subscription exists and has an end date
  const subscriptionEndDate = currentSubscription?.subscriptionExpiryDate;

  // Get the current date
  const currentDate = new Date();

  // Parse the subscription end date (assuming it's in a string format that Date can parse)
  const endDate = new Date(subscriptionEndDate);

  // Determine if the subscription has expired
  const isExpired = subscriptionEndDate && currentDate > endDate;

  let content = null;

  if (isLoading) {
    content = <MySubscriptionCardSkeleton />;
  } else if (myAllSubscription?.length === 0) {
    content = (
      <div className="border rounded-lg bg-white shadow-md p-5 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-semibold">
              No Subscription
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              You have not subscribed to any package yet.
            </p>
          </div>
        </div>
      </div>
    );
  } else if (myAllSubscription?.length > 0) {
    content = (
      <>
        {/* Current Subscription Box */}
        {currentSubscription && (
          <div className="border rounded-lg bg-white shadow-md p-5 md:p-8">
            <div className="flex items-center justify-between gap-4">
              {/* Subscription Details */}
              <div className="flex items-start gap-4">
                <input
                  type="radio"
                  name="subscription"
                  className="mt-1 w-5 h-5 text-primary focus:ring-blue-500"
                  checked
                  readOnly
                />
                <div className="space-y-2">
                  <h2 className="text-lg md:text-xl font-semibold">
                    {currentSubscription?.subscriptionId?.subscriptionName}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    ${currentSubscription?.subscriptionId?.subscriptionFee} USD
                    /{" "}
                    {getDurationText(
                      currentSubscription?.subscriptionId?.subscriptionDuration
                    )}
                  </p>
                  {/* subscription end date */}
                  <p>
                    Subscription ends on:{" "}
                    {moment(subscriptionEndDate).format("DD MMM YYYY")}
                  </p>
                  <p className="text-sm text-gray-500">
                    Price excludes applicable taxes
                  </p>
                </div>
              </div>

              {/* Renew Button - Only show if the subscription has expired */}
              {isExpired && (
                <button className="px-4 py-2 bg-primary hover:bg-blue-700 transition text-white rounded-md">
                  Renew
                </button>
              )}
            </div>
          </div>
        )}
        {/* All Other Subscriptions */}
        {myAllSubscription?.length > 1 && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
              Other Subscriptions
            </h2>
            {myAllSubscription
              .slice(1)
              .map((subscription: IMySubscription, index: number) => (
                <div
                  key={index}
                  className="border rounded-lg bg-white shadow-md p-5 md:p-8 mb-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Subscription Details */}
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="subscription"
                        className="mt-1 w-5 h-5 text-primary focus:ring-blue-500"
                        readOnly
                      />
                      <div className="space-y-2">
                        <h2 className="text-lg md:text-xl font-semibold">
                          {subscription?.subscriptionId?.subscriptionName}
                        </h2>

                        <p className="text-sm md:text-base text-gray-600">
                          ${subscription?.subscriptionId?.subscriptionFee} USD /{" "}
                          {getDurationText(
                            subscription?.subscriptionId?.subscriptionDuration
                          )}
                        </p>
                        {/* subscription end date */}
                        <p>
                          Subscription ends on:{" "}
                          {moment(subscription?.subscriptionExpiryDate).format(
                            "DD MMM YYYY"
                          )}
                        </p>
                        <p className="text-sm text-gray-500">
                          Price excludes applicable taxes
                        </p>
                      </div>
                    </div>

                    {/* Renew Button - Only show if the subscription has expired */}
                    {subscription?.subscriptionExpiryDate &&
                      currentDate >
                        new Date(subscription?.subscriptionExpiryDate) && (
                        <button className="px-4 py-2 bg-primary hover:bg-blue-700 transition text-white rounded-md">
                          Renew
                        </button>
                      )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </>
    );
  }

  return (
    <section className="w-full px-5 py-36 bg-[#F5F9FF]">
      <div className="w-full max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-semibold mb-6">
          My Current Package
        </h1>
        {/* Subscription Content */}
        {content}
      </div>
      <div className="w-full max-w-5xl mx-auto mt-20">
        <h1 className="text-xl md:text-2xl font-semibold mt-8 mb-4">
          All Subscription
        </h1>
        {subscriptionContent}
      </div>
    </section>
  );
};

export default MySubscription;
