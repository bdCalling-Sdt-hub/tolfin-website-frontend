
import AboutUs from "@/components/Pages/Home/About";

 
import WhyChooseUs from "@/components/Pages/Home/Features";
import HeroSection from "@/components/Pages/Home/HeroSection";
import TeamSection from "@/components/Pages/Home/MeetSession";
import PricingCard from "@/components/Pages/Home/PricingCard";
import Question from "@/components/Pages/Home/Queston";
import ServiceSection from "@/components/Pages/Home/ServiceSession";

import TestimonialSection from "@/components/Pages/Home/TestimonialSession";


const Home = () => {
  return (
    <section className="w-full  bg-gradient-to-t from-[#111111] to-[#111111]">
      <HeroSection />
      <WhyChooseUs />
      <AboutUs />
      <ServiceSection />
      <PricingCard />
      <TestimonialSection/>
      <TeamSection/>
      <Question />
    </section>
  );
};

export default Home;


