import Skeleton from "@/components/ui/Skeleton";
import React from "react";

const DiscoverCardSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-xl p-3">
      {/* Skeleton for Profile Image */}
      <div className="w-full h-56 relative">
        <Skeleton width="100%" height="100%" className="rounded" />
      </div>
      <div className="w-full p-5">
        <div className="w-full flex justify-between items-center mb-5">
          {/* Skeleton for User's Name */}
          <Skeleton width="150px" height="1.25rem" className="mb-2" />
          {/* Skeleton for Age */}
          <Skeleton width="80px" height="1rem" className="mb-2" />
        </div>
        {/* Skeleton for About Me */}
        <Skeleton width="100%" height="1rem" className="mb-2" />
        <Skeleton width="100%" height="1rem" className="mb-2" />
      </div>
    </div>
  );
};

export default DiscoverCardSkeleton;
