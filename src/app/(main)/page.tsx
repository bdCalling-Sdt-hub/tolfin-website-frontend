
import AboutUs from "@/components/Pages/Home/AboutUs";

import ChooseUs from "@/components/Pages/Home/ChooseUs";
import HeroSection from "@/components/Pages/Home/HeroSection";
 
import ServiceSection from "@/components/Pages/Home/ServiceSession";
import SweetStories from "@/components/Pages/Home/SweetStories";
import Testimonials from "@/components/Pages/Home/Testimonials";

const Home = () => {
  return (
    <section className="w-full  bg-gradient-to-t from-[#111111] to-[#111111]">
      <HeroSection />
      <AboutUs />
      <ServiceSection/>
      <Testimonials />
      <ChooseUs/>
      <SweetStories/>
    </section>
  );
};

export default Home;
