"use client";
import { useGetAllSubscriptionQuery } from "@/redux/features/subscription/subscriptionApi";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import { ISubscription } from "@/types/subscription";
import SubscriptionCardSkeleton from "./SubscriptionCardSkeleton";

const Subscriptions = () => {
  const { data: res, isLoading } = useGetAllSubscriptionQuery(undefined);
  const allSubscription = res?.data?.attributes?.results;

  let content = null;
  if (isLoading) {
    content = (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 md:mt-20 ">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <SubscriptionCardSkeleton key={idx} />
          ))}
      </div>
    );
  } else if (allSubscription?.length <= 0) {
    content = (
      <h1 className="text-2xl font-semibold text-center mt-5 md:mt-20">
        No Subscriptions Found
      </h1>
    );
  } else if (allSubscription?.length > 0) {
    content = (
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 md:mt-20 ">
        {allSubscription?.map((plan: ISubscription, index: number) => (
          <SubscriptionCard key={index} index={index} plan={plan} />
        ))}
      </div>
    );
  }
  return (
    <section className="w-full px-5 py-24 md:py-36 bg-[#F5F9FF] ">
      {content}
    </section>
  );
};

export default Subscriptions;
