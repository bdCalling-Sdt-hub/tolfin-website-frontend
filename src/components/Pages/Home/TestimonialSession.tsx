// components/TestimonialSection.tsx

"use client"
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import hollywood from '@/assets/hero/holywood1.png';
import hollywood2 from '@/assets/hero/hlywood2.png';
import hollywood3 from '@/assets/hero/the rock.png';
import hollywood4 from '@/assets/hero/jonydev.png';

const TestimonialSection = () => {
  const [selectedImage, setSelectedImage] = useState(hollywood); // Default large image

  const handleThumbnailClick = (image: StaticImageData) => {
    setSelectedImage(image); // Update the main image when a thumbnail is clicked
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex space-x-6">
          {/* Main Image */}
          <div className="relative h-[35rem] w-[35rem] overflow-hidden shadow-lg shadow-black/30">
            <Image
              className="h-full object-cover"
              src={selectedImage}
              alt="Main testimonial image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row space-y-4">
            {/* Thumbnail 1 */}
            <div
              className="relative h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[100px] shadow-lg"
              onClick={() => handleThumbnailClick(hollywood)}
            >
              <Image
                className="h-full w-full object-cover"
                src={hollywood}
                alt="Small testimonial 1"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Thumbnail 2 */}
            <div
              className="relative  h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[100px] shadow-lg"
              onClick={() => handleThumbnailClick(hollywood2)}
            >
              <Image
                className="h-full w-full object-cover"
                src={hollywood2}
                alt="Small testimonial 2"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Thumbnail 3 */}
            <div
              className="relative  h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[40px] shadow-lg"
              onClick={() => handleThumbnailClick(hollywood3)}
            >
              <Image
                className="h-full w-full object-cover"
                src={hollywood3}
                alt="Small testimonial 3"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Thumbnail 4 */}
            <div
              className="relative  h-[35rem] w-[5rem] cursor-pointer overflow-hidden rounded-[100px] shadow-lg"
              onClick={() => handleThumbnailClick(hollywood4)}
            >
              <Image
                className="h-full w-full object-cover"
                src={hollywood4}
                alt="Small testimonial 4"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-6 text-center text-white">
          <p className="text-lg font-semibold">
            I recently used Tolfin Global’s VIP travel and security services, and I was highly impressed. Their team ensured a smooth airport experience with discreet and efficient handling. The security detail was top-notch, and the entire process was seamless. I felt safe, valued, and well taken care of. Highly recommend their services for anyone seeking reliability and professionalism!
          </p>
          <h4 className="mt-4 text-2xl font-bold">Johnny Depp</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
