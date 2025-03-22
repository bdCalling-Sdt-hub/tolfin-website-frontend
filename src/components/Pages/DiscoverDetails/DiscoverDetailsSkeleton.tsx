import Skeleton from "@/components/ui/Skeleton";

const DiscoverDetailsSkeleton = () => {
  return (
    <section className="w-full bg-secondary">
      <div className="w-full h-[350px] relative">
        <Skeleton
          width="100%"
          height="350px"
          className="bg-gray-300 rounded-md mb-4"
        />
      </div>
      <div className="w-full md:container px-5  py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-[220px] h-[220px] relative -mt-0 md:-mt-48 flex-shrink-0">
            <Skeleton
              width="100%"
              height="100%"
              className="rounded-full bg-gray-300"
            />{" "}
            {/* Profile Image Skeleton */}
          </div>
          <div className="w-full space-y-3 flex-shrink-0">
            <Skeleton
              width="60%"
              height="1.5rem"
              className="bg-gray-300 rounded-md"
            />{" "}
            {/* Name Skeleton */}
            <div className="flex items-center gap-5">
              <Skeleton
                width="40%"
                height="1rem"
                className="bg-gray-300 rounded-md"
              />{" "}
              {/* Age Skeleton */}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Skeleton
            width="120px"
            height="3rem"
            className="bg-gray-300 rounded-md"
          />{" "}
          {/* Message Button Skeleton */}
          <Skeleton
            width="50px"
            height="50px"
            className="rounded-full bg-gray-300"
          />{" "}
          {/* Send Flower Button Skeleton */}
          <Skeleton
            width="50px"
            height="50px"
            className="rounded-full bg-gray-300"
          />{" "}
          {/* Dropdown Button Skeleton */}
        </div>
      </div>
      <div className="mt-10">
       <div className="flex flex-wrap gap-4">
       <Skeleton
          width="20%"
          height="40px"
          className="bg-gray-300 rounded-md mb-4"
        />
       <Skeleton
          width="20%"
          height="40px"
          className="bg-gray-300 rounded-md mb-4"
        />
       </div>
        {/* Tab Header Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skeletons for each section */}
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />
          <Skeleton
            width="100%"
            height="1rem"
            className="bg-gray-300 rounded-md"
          />

        </div>
      </div>

      </div>
    </section>
  );
};

export default DiscoverDetailsSkeleton;
