import Skeleton from "@/components/ui/Skeleton";

const MySubscriptionCardSkeleton = () => {
  return (
    <div className="w-full border rounded-lg  shadow-md p-5 md:p-8 flex gap-2">
      <div className="size-6 rounded-full border border-gray-400"></div>
      {/* Skeleton for radio button */}
      <div className="w-full space-y-2">
        <Skeleton
          width="75%"
          height="1.25rem"
          className="bg-gray-300 rounded-md"
        />
        {/* Skeleton for subscription name */}
        <Skeleton
          width="50%"
          height="1rem"
          className="bg-gray-300 rounded-md"
        />
        {/* Skeleton for subscription fee */}
        <Skeleton
          width="50%"
          height="1rem"
          className="bg-gray-300 rounded-md"
        />
        {/* Skeleton for duration text */}
        <Skeleton
          width="75%"
          height="1rem"
          className="bg-gray-300 rounded-md"
        />
        {/* Skeleton for subscription end date */}
        <Skeleton
          width="50%"
          height="1rem"
          className="bg-gray-300 rounded-md"
        />
        {/* Skeleton for taxes */}
      </div>
    </div>
  );
};

export default MySubscriptionCardSkeleton;
