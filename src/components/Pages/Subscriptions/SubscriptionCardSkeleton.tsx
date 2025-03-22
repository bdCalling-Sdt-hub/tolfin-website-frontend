import Skeleton from "@/components/ui/Skeleton";
import React from "react";

const SubscriptionCardSkeleton = () => {
  return (
    <div className="border rounded-lg p-5 flex justify-between flex-col text-center shadow-lg w-full min-h-96">
      <div>
        {/* Skeleton for Subscription Name */}
        <Skeleton width="80%" height="1.5rem" className="mb-2" />

        {/* Skeleton for Subscription Fee */}
        <Skeleton width="60%" height="2rem" className="mb-2" />

        {/* Skeleton for Subscription Duration */}
        <Skeleton
          width="70%"
          height="1.25rem"
          className="even:text-primary text-xl md:text-2xl mb-4 text-gray-800 font-semibold"
        />

        {/* Skeleton for Features List */}
        <div className="flex flex-col gap-2 justify-center items-center mt-8">
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center gap-2">
            <div className="size-5 border-2 border-gray-300 rounded-full flex items-center justify-center p-2"></div>
            <Skeleton width="100%" height="0.5rem" className="mx-auto" />
          </div>
        </div>
      </div>

      {/* Skeleton for Upgrade Button */}
      <div className="w-full mt-5">
        <Skeleton width="50%" height="2.5rem" className="mx-auto" />
      </div>
    </div>
  );
};

export default SubscriptionCardSkeleton;
