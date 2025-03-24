// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { EffectFade, Autoplay } from "swiper/modules";
// import heroImage2 from "@/assets/hero/heroImage.png"; // Add another image if needed
// import useUser from "@/hooks/useUser";
// import { useDispatch } from "react-redux";
// import { openModal } from "@/redux/features/auth/authSlice";
// import { FaArrowRight } from "react-icons/fa";

// const HeroSection = () => {
//   const user = useUser();
//   const dispatch = useDispatch();
//   const handleJoinNow = () => {
//     dispatch(openModal());
//   };
//   return (
//     <section className="w-full h-full  bg-[#252525] relative overflow-x-hidden">
//       {/* Swiper for carousel */}
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         autoplay={{
//           delay: 3000, // Auto slide every 3 seconds
//           disableOnInteraction: false, // Keep autoplay even after interaction
//         }}
//         effect="fade"
//         loop={true}
//         className="w-full h-full md:h-screen"
//       >
//         {/* Slide 2 */}
//         <SwiperSlide className="relative w-full h-full">
//           <div
//             className="w-full h-full bg-top md:bg-right-top bg-no-repeat cursor-pointer"
//             style={{ backgroundImage: `url(${heroImage2.src})` }}
//           >
//             <div className="flex w-full md:container h-full px-5 pt-28 py-40 md:py-56 xl:py-64">
//               <div className=" ">
//                 <div className="space-y-3  md:space-y-5 md:mt-60">
//                   <h1 className="text-3xl md:text-4xl xl:text-6xl font-medium text-white">
//                     Smart Security for <br /> the Modern Executive.
//                   </h1>


//                   {!user && (
//                     <div className="mt-5">
//                       <button
//                         onClick={handleJoinNow}
//                         className="bg-[#154047] text-white px-6 py-2 rounded-lg hover:bg-[#55a2ad] transition duration-300 ease-in-out"
//                       >
//                         Book Appointment
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <section className=" w-[20%]  bg-cover bg-center">
//                   <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
//                     <div className="text-center text-white px-6 py-8 md:px-16 md:py-12 max-w-lg rounded-xl shadow-lg bg-[#1f4b527c]">
//                       <h2 className="text-3xl font-semibold mb-4">Reliable Security Services, Anytime You Need</h2>
//                       <p className="mb-6 text-lg">
//                         Ensure your safety with our professional security solutions. From personal protection to corporate security, we offer top-tier services tailored to your needs.
//                         Our highly trained security professionals are available 24/7 to safeguard what matters most to you.
//                       </p>
//                       <button className="flex items-center gap-2 bg-primary text-white rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
//                         Book A Service <FaArrowRight />
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//     </section>





//   );
// };

// export default HeroSection;



"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import heroImage from "@/assets/hero/heroImage.png"; // Replace with the image path of your choice
import useUser from "@/hooks/useUser";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/features/auth/authSlice";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const user = useUser();
  const dispatch = useDispatch();
  const handleJoinNow = () => {
    dispatch(openModal());
  };

  return (
    

    <section className="w-full h-screen  relative overflow-x-hidden">
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})`,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add the shadow here
            }}
          >
            <div className="w-full md:container h-full px-5 pt-28 py-40 md:py-56 xl:py-64">
              <div className="flex justify-between items-center md:mt-20">
                <div className="space-y-5 md:space-y-8 md:mt-60">
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-medium text-white">
                    Smart Security for <br /> the Modern Executive.
                  </h1>

                  {!user && (
                    <div className="mt-5">
                      <button
                        onClick={handleJoinNow}
                        className="flex items-center gap-2 bg-[#154047] text-[#fbfdfd] px-6 py-3 rounded-lg shadow-md hover:bg-[#55a2ad] transition duration-300 ease-in-out"
                      >
                        Book Appointment <FaArrowRight />
                      </button>
                    </div>
                  )}
                </div>

                <div className="md:w-[30%] md:mt-20 bg-cover bg-center">
                  <div className="text-center text-white px-6 py-8 md:px-16 md:py-12 max-w-lg rounded-xl shadow-lg bg-[#1f4b527c]">
                    <h2 className="text-3xl font-semibold mb-4">Reliable Security Services, Anytime You Need</h2>
                    <p className="mb-6 text-lg">
                      Ensure your safety with our professional security solutions. From personal protection to corporate security, we offer top-tier services tailored to your needs.
                      Our highly trained security professionals are available 24/7 to safeguard what matters most to you.
                    </p>
                    <button className="flex items-center gap-2 bg-[#154047] text-white rounded-lg py-2 px-6 hover:bg-opacity-80 transition-all">
                      Book A Service <FaArrowRight />
                    </button>
                  </div>
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
