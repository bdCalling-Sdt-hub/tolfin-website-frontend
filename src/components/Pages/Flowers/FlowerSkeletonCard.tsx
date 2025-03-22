import Skeleton from "@/components/ui/Skeleton";
const FlowerSkeletonCard = () => {
  return (
    <div className="w-full bg-white rounded-xl p-3">
      {/* Skeleton for Profile Image */}
      <div className="w-full h-56 relative">
        <Skeleton width="100%" height="100%" className="rounded" />
      </div>
      <div className="w-full p-5">
        {/* Skeleton for User's Name */}
        <Skeleton width="150px" height="1.25rem" className="mb-2" />
        {/* Skeleton for Age */}
        <Skeleton width="80px" height="1rem" className="mb-2" />
        {/* Skeleton for About Me */}
        <Skeleton width="100%" height="1rem" className="mb-2" />

        {/* Skeleton for buttons */}
        <div className="flex gap-5 items-center mt-5">
          <Skeleton width="100px" height="2.5rem" className="rounded-lg" />
          <Skeleton width="2.5rem" height="2.5rem" className="rounded-full" />
          <Skeleton width="2.5rem" height="2.5rem" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default FlowerSkeletonCard;
