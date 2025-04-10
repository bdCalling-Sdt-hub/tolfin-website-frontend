

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import heroImage from "@/assets/hero/heroImage.png";
import useUser from "@/hooks/useUser";
import { useDispatch } from "react-redux";
import { } from "@/redux/features/auth/authSlice";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  const user = useUser();
  const dispatch = useDispatch();
  const handleJoinNow = () => {
    // dispatch(openModal());
  };

  return (
    <section className="w-full h-screen relative overflow-x-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide className="relative w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.8) 100%), url(${heroImage.src})`,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}

          
            
          >
            <div className="w-full md:container h-full px-5 py-40 md:py-56 xl:py-64">
              <div className="flex flex-col md:flex-row justify-between items-center md:mt-20">
                <div className="space-y-5 md:space-y-8 md:mt-60 w-full md:w-2/3">
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-medium text-white">
                    Smart Security for the <br /> Modern Executive.
                  </h1>

                  {!user && (
                    <div className="mt-5">
                      <Link href="/bookingFrom">
                        <button className="flex items-center w-[411px] h-[86px] gap-2 bg-[#154047] border border-[#40eedf9d]  rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                          <h2 className="text-3xl text-white mr-5">Book Appointment</h2>
                          <div className="bg-[#3ac7bb9d] w-10 h-10 rounded-lg flex items-center justify-center ">
                            <FaArrowRight className="text-white justify-end" />
                          </div>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>




                <div className="md:w-[418px] md:h-[400px] md:mt-20 text-center text-white  py-8 md:px-8 md:py-10 max-w-lg rounded-xl shadow-lg bg-[#1540474D] border-2 border-[#627F84]">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Reliable Security Services, Anytime You Need</h2>
                  <div className="bg-[#f0f0f0] p-5 rounded-lg w-[354px]">
                    <p className="text-sm text-black">
                      Ensure your safety with our professional security solutions. From personal protection to corporate security, we offer top-tier services tailored to your needs.
                      Our highly trained security professionals are available 24/7 to safeguard what matters most to you.
                    </p>
                  </div>
                  <Link href="/appoinmnet"> 
                  <button className="mt-5 flex  items-center gap-2 bg-[#154047] text-[#A2E8E0] rounded-lg p-5 py-2 px-6 hover:bg-opacity-80 transition-all">
                    Book A Services
                    <div className="bg-[#40d1c559] w-10 h-10 rounded-lg flex items-center justify-center">
                      <FaArrowRight className="text-white" />
                    </div>
                  </button>
                  </Link>

                </div>


              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;

