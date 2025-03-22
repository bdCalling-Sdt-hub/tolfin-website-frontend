"use client";
import { useGetAllSubscriptionQuery } from "@/redux/features/subscription/subscriptionApi";
import { ISubscription } from "@/types/subscription";
import React from "react";
import SubscriptionCard from "../Subscriptions/SubscriptionCard";
import SubscriptionCardSkeleton from "../Subscriptions/SubscriptionCardSkeleton";
const Subscriptions = () => {
  const { data: res, isLoading } = useGetAllSubscriptionQuery(undefined);
  const allSubscription = res?.data?.attributes?.results;

  let content = null;
  if (isLoading) {
    content = (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <SubscriptionCardSkeleton key={idx} />
          ))}
      </div>
    );
  } else if (allSubscription?.length <= 0) {
    content = (
      <h1 className="text-2xl font-semibold text-center">
        No Subscriptions Found
      </h1>
    );
  } else if (allSubscription?.length > 0) {
    content = (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {allSubscription?.map((plan: ISubscription, index: number) => (
          <SubscriptionCard key={index} index={index} plan={plan} />
        ))}
      </div>
    );
  }
  return (
    <section className="w-full px-5 py-16 bg-white">
      <div className="w-full md:container mx-auto mb-20">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center mb-6">
          Subscribe To <span className="text-primary">1Plus1</span>
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Start with a 1-day free trial. Choose VIP for access to <br />
          verified users or Standard for all essential features.
        </p>
      </div>
      {content}
    </section>
  );
};

export default Subscriptions;
