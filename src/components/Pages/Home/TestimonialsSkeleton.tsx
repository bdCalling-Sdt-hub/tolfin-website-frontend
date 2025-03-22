import Skeleton from "@/components/ui/Skeleton";

const TestimonialsSkeleton = () => {
  return (
    <div className="w-full h-full p-5 md:p-8 rounded-lg bg-white border shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-5 items-center">
          {/* Skeleton for the profile image */}
          <Skeleton width="64px" height="64px" className="rounded-full" />
          <div className="text-center md:text-left">
            {/* Skeleton for the user name */}
            <Skeleton width="120px" height="1.25rem" className="mb-2" />
            {/* Skeleton for the occupation */}
            <Skeleton width="80px" height="1rem" />
          </div>
        </div>
        {/* Skeleton for the rating */}
        <Skeleton width="120px" height="1rem" />
      </div>
      {/* Skeleton for the comment */}
      <Skeleton width="100%" height="1rem" className="mt-5" />
    </div>
  );
};

export default TestimonialsSkeleton;
