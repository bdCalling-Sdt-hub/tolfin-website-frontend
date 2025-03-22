"use client";
import React from "react";
import DiscoverCard from "../Discover/DiscoverCard/DiscoverCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useGetAllDiscoverUserQuery } from "@/redux/features/discover/discoverApi";
import { TUser } from "@/types/user.Type";
import useUser from "@/hooks/useUser";
import DiscoverCardSkeleton from "../Discover/DiscoverCard/DiscoverCardSkeleton";
const StandardSubscriptionUser = () => {
  const user = useUser();
  const { data: responseData, isLoading } = useGetAllDiscoverUserQuery({
    userId: user?._id,
    standardSubscriptionUser: true,
  });
  const allDiscoverUser = responseData?.data?.attributes?.results;
  let content = null;
  if (isLoading) {
    content = (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        // i want to add dots
        pagination={{
          dynamicBullets: true,
        }}
        // i want to add autoplay
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[FreeMode, Pagination]}
        // Autoplay
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <DiscoverCardSkeleton />
            </SwiperSlide>
          ))}
      </Swiper>
    );
  } else if (allDiscoverUser?.length === 0) {
    content = (
      <h1 className="text-2xl font-semibold text-center">
        No Standard Subscription User Found
      </h1>
    );
  } else if (allDiscoverUser?.length > 0) {
    content = (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        // i want to add dots
        pagination={{
          dynamicBullets: true,
        }}
        // i want to add autoplay
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[FreeMode, Pagination]}
        // Autoplay
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {allDiscoverUser?.map((discover: TUser) => (
          <SwiperSlide key={discover._id}>
            <DiscoverCard discover={discover} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <section className="w-full px-5 py-16 bg-[#f5f7fa]">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center mb-10">
        Standard Subscription User
      </h1>
      <div className="w-full md:container ">{content}</div>
    </section>
  );
};

export default StandardSubscriptionUser;
