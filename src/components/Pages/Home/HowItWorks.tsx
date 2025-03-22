"use client";
import Image from "next/image";
import createProfile from "@/assets/howItWork/create-profile.png";
import findMatch from "@/assets/howItWork/find-match.png";
import dating from "@/assets/howItWork/dating.png";

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and fill in your details to let your personality shine.",
    icon: createProfile,
  },
  {
    title: "Find and Connect with Matches",
    description: "Browse profiles tailored to your interests and values.",
    icon: findMatch,
  },
  {
    title: "Start Your Journey",
    description: "Start meaningful conversations with your matches.",
    icon: dating,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-5 py-16 md:py-20 bg-white">
      <div className="w-full text-center space-y-2 mb-10">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center">
          How Does <span className="text-primary">It Work</span>
        </h1>
        <h1 className="text-xl font-medium text-center">
          You’re Just 3 Steps Away From A Great Date
        </h1>
      </div>
      <div className="w-full md:container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              {/* Step Content */}
              <div className="flex flex-col items-center text-center gap-5 p-5 rounded-md">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={120}
                  height={120}
                  className="size-[120px] rounded-full"
                />
                <div className="text-center">
                  <h2 className="text-lg font-semibold">{step.title}</h2>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;