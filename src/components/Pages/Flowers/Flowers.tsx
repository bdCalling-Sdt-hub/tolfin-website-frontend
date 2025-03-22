"use client";
import { useState } from "react";
import { useWhoSentMeFlowersQuery } from "@/redux/features/flower/flowerApi";
import FlowerCard from "./FlowerCard";
import { IFlower } from "@/types/flower";
import useUser from "@/hooks/useUser";
import FlowerSkeletonCard from "./FlowerSkeletonCard";

const Flowers = () => {
  const user = useUser();
  const [page, setPage] = useState(1); // To track the current page
  const { data: responseData, isLoading } = useWhoSentMeFlowersQuery(
    { page, limit: 12 },
    {
      refetchOnMountOrArgChange: true,
      skip: !user?._id,
    }
  );
  const whoSendMeFlowers = responseData?.data?.attributes?.results;
  const totalResults = responseData?.data?.attributes?.totalResults;

  const totalPages = Math.ceil(totalResults / 12); // Calculate total number of pages

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  let content = null;
  if (isLoading) {
    content = (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 md:mt-20">
        {Array(12)
          .fill(0)
          .map((_, idx) => (
            <FlowerSkeletonCard key={idx} />
          ))}
      </div>
    );
  } else if (whoSendMeFlowers?.length <= 0) {
    content = (
      <h1 className="text-2xl font-semibold text-center mt-5 md:mt-20">
        No Flowers Found
      </h1>
    );
  } else if (whoSendMeFlowers?.length > 0) {
    content = (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 md:mt-20 ">
        {whoSendMeFlowers?.map((flower: IFlower) => (
          <FlowerCard key={flower._id} flower={flower} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center pt-32 px-5 py-10">
      <div className={`w-full h-full md:min-h-screen container px-5 my-5`}>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Who Sent Me Flowers
        </h1>
        {content}

        {/* Pagination controls */}
        {totalResults > 12 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flowers;
