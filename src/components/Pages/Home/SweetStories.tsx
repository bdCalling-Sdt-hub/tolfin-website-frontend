"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import datingImage from "@/assets/datingtips/image2.png";
const Testimonials = () => {
  return (
    <section className="w-full px-5 py-16">
      <div className="w-full text-center space-y-2 mb-10">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center">
          Love in Faith <span className="text-primary">Success Stories</span>
        </h1>
        <h1 className="text-xl font-medium text-center">
          Sweet Stories From Our Lovers
        </h1>
      </div>
      <div className="w-full md:container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{ dynamicBullets: true }}
          modules={[FreeMode, Pagination]}
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="w-full rounded-lg border">
            <div className="w-full h-56 md:h-60 relative">
              <Image
                src={datingImage}
                alt="datingIage"
                layout="fill"
                className="absolute rounded-t-lg"
              />
            </div>
            <div className="w-full p-5 space-y-3">
              <h1 className="text-xl md:text-2xl font-semibold">
                Couple Of Month
              </h1>
              <h1>
                Seamlesly evolve unique web-readiness with Collabors atively
                fabricate best of breed and apcations through
              </h1>
              <button className="px-6 py-2.5 bg-primary rounded-lg text-white">
                Read More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full rounded-lg border">
            <div className="w-full h-56 md:h-60 relative">
              <Image
                src={datingImage}
                alt="datingIage"
                layout="fill"
                className="absolute rounded-t-lg"
              />
            </div>
            <div className="w-full p-5 space-y-3">
              <h1 className="text-xl md:text-2xl font-semibold">
                Couple Of Month
              </h1>
              <h1>
                Seamlesly evolve unique web-readiness with Collabors atively
                fabricate best of breed and apcations through
              </h1>
              <button className="px-6 py-2.5 bg-primary rounded-lg text-white">
                Read More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full rounded-lg border">
            <div className="w-full h-56 md:h-60 relative">
              <Image
                src={datingImage}
                alt="datingIage"
                layout="fill"
                className="absolute rounded-t-lg"
              />
            </div>
            <div className="w-full p-5 space-y-3">
              <h1 className="text-xl md:text-2xl font-semibold">
                Couple Of Month
              </h1>
              <h1>
                Seamlesly evolve unique web-readiness with Collabors atively
                fabricate best of breed and apcations through
              </h1>
              <button className="px-6 py-2.5 bg-primary rounded-lg text-white">
                Read More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full rounded-lg border">
            <div className="w-full h-56 md:h-60 relative">
              <Image
                src={datingImage}
                alt="datingIage"
                layout="fill"
                className="absolute rounded-t-lg"
              />
            </div>
            <div className="w-full p-5 space-y-3">
              <h1 className="text-xl md:text-2xl font-semibold">
                Couple Of Month
              </h1>
              <h1>
                Seamlesly evolve unique web-readiness with Collabors atively
                fabricate best of breed and apcations through
              </h1>
              <button className="px-6 py-2.5 bg-primary rounded-lg text-white">
                Read More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full rounded-lg border">
            <div className="w-full h-56 md:h-60 relative">
              <Image
                src={datingImage}
                alt="datingIage"
                layout="fill"
                className="absolute rounded-t-lg"
              />
            </div>
            <div className="w-full p-5 space-y-3">
              <h1 className="text-xl md:text-2xl font-semibold">
                Couple Of Month
              </h1>
              <h1>
                Seamlesly evolve unique web-readiness with Collabors atively
                fabricate best of breed and apcations through
              </h1>
              <button className="px-6 py-2.5 bg-primary rounded-lg text-white">
                Read More
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
