
import AboutUs from "@/components/Pages/Home/AboutUs";

 
import WhyChooseUs from "@/components/Pages/Home/Features";
import HeroSection from "@/components/Pages/Home/HeroSection";
import PricingCard from "@/components/Pages/Home/PricingCard";
import ServiceSection from "@/components/Pages/Home/ServiceSession";
import SweetStories from "@/components/Pages/Home/SweetStories";
import TestimonialSection from "@/components/Pages/Home/TestimonialSession";


const Home = () => {
  return (
    <section className="w-full  bg-gradient-to-t from-[#111111] to-[#111111]">
      <HeroSection />
      <AboutUs />
      <ServiceSection />
      <WhyChooseUs />
      <PricingCard />
      <TestimonialSection/>
      <SweetStories />
    </section>
  );
};

export default Home;
