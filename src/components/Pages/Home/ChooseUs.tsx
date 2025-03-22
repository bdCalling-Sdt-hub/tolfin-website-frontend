import Image from "next/image";
import filter from "@/assets/chooseUs/filter.png";
import profile from "@/assets/chooseUs/profile.png";
import chat from "@/assets/chooseUs/chat.png";
import location from "@/assets/chooseUs/live-location.png";

const ChooseUs = () => {
  return (
    <section className="w-full px-5  py-16  bg-[#f5f7fa]">
      <div className="w-full text-center space-y-3">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center">
          Why Choose <span className="text-primary">1Plus1 Dating</span>
        </h1>
        <h1>Our dating platform is like a breath of fresh air. Clean and trendy design with <br /> ready to use features we are sure you will love.</h1>
      </div>
      <div className="w-full md:container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
        <div className="rounded-xl p-5 space-y-4 bg-white text-center">
          <div className="relative bg-[#E6ECF7] rounded-md size-24 flex justify-center items-center mx-auto">
            <Image
              width={60}
              height={60}
              src={filter.src}
              alt="Advanced Filters"
              className="mx-auto"
            />
          </div>
          <h1 className="text-lg md:text-xl font-semibold">Advanced Filters</h1>
          <p className="text-gray-600">
            Find your ideal match with precise and customizable search filters.
          </p>
        </div>
        <div className="rounded-xl p-5 space-y-4 bg-white text-center">
          <div className="relative bg-[#E6ECF7] rounded-md size-24 flex justify-center items-center mx-auto">
            <Image
              width={60}
              height={60}
              src={profile.src}
              alt="Personalized Profile"
              className="mx-auto"
            />
          </div>
          <h1 className="text-lg md:text-xl font-semibold">
            Personalized Profile
          </h1>
          <p className="text-gray-600">
            Showcase your personality with detailed and customizable profiles.
          </p>
        </div>
        <div className="rounded-xl p-5 space-y-4 bg-white text-center">
          <div className="relative bg-[#E6ECF7] rounded-md size-24 flex justify-center items-center mx-auto">
            <Image
              width={60}
              height={60}
              src={chat.src}
              alt="Real Time Chat"
              className="mx-auto"
            />
          </div>
          <h1 className="text-lg md:text-xl font-semibold">Real Time Chat</h1>
          <p className="text-gray-600">
            Connect instantly with your matches through real-time messaging.
          </p>
        </div>
        <div className="rounded-xl p-5 space-y-4 bg-white text-center">
          <div className="relative bg-[#E6ECF7] rounded-md size-24 flex justify-center items-center mx-auto">
            <Image
              width={60}
              height={60}
              src={location.src}
              alt="Live Location"
              className="mx-auto"
            />
          </div>
          <h1 className="text-lg md:text-xl font-semibold">Live Location</h1>
          <p className="text-gray-600">
            Share your live location safely to meet your matches nearby.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
