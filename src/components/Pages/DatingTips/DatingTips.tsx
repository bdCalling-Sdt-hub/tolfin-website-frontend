import React from "react";
import tick from "@/assets/datingtips/tick.png";
import image from "@/assets/datingtips/image.png";
import image1 from "@/assets/datingtips/image1.png";
import image2 from "@/assets/datingtips/image2.png";
import image3 from "@/assets/datingtips/image3.png";
import Image from "next/image";
const DatingTips = () => {
  return (
    <section>
      <div className="w-full  bg-[#F5F9FF]">
        <div className="w-full md:container px-5 pt-40 pb-16  flex flex-col md:flex-row justify-between items-center gap-10">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-relaxed">
            Essential <span className="text-[#FF6B6B]">Tips</span> for <br />
            Successful and Safe Online Dating
          </h1>
          <p className="text-gray-600 mb-12">
            Discover valuable tips to enhance your online dating experience.
            From <br /> creating an authentic profile to staying safe and
            engaging meaningfully, our guide helps you build real connections
            effortlessly.
          </p>
        </div>
      </div>
      <div className="w-full bg-white py-10 md:py-16">
        <div className="w-full md:container p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full flex flex-wrap">
            <Image
              src={image.src}
              alt="image"
              width={300}
              height={300}
              className="size-[300px] rounded-full"
            />
            <Image
              src={image1.src}
              alt="image"
              width={300}
              height={300}
              className="size-[300px]"
            />
            <Image
              src={image2.src}
              alt="image"
              width={300}
              height={300}
              className="size-[300px] -mt-2 rounded-bl-full"
            />
            <Image
              src={image3.src}
              alt="image"
              width={300}
              height={300}
              className="size-[300px] -mt-2 rounded-full"
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white flex justify-center items-center gap-3 p-6 rounded-lg shadow-md text-left"
              >
                <Image
                  src={tick}
                  alt="tick"
                  width={55}
                  height={55}
                  className="flex-shrink-0"
                />
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quam. Quibusdam tempora iure nemo atque ducimus
                  doloribus quas repellat vero natus culpa, maiores aperiam.
                  Perferendis excepturi incidunt, officia minima, velit dicta
                  magni sunt laudantium pariatur commodi ratione dolorem eum
                  harum neque similique assumenda, non tempore placeat facilis!
                  Cum, optio delectus.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatingTips;
