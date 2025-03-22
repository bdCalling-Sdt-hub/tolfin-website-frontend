import { imageBaseUrl } from "@/config/config";
import { ISuccessStoryCardProps } from "@/types/successStory";
import { Rate } from "antd";
import Image from "next/image";

const TestimonialsCard = ({
  testimonial,
}: {
  testimonial: ISuccessStoryCardProps;
}) => {

  console.log(testimonial)
  return (
    <div className="w-full  h-full p-5 md:p-8 rounded-lg bg-white border shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-5 items-center">
          {testimonial?.userId?.profileImage?.imageUrl && (
            <Image
              src={`${imageBaseUrl}${testimonial?.userId?.profileImage?.imageUrl}`}
              alt="profile"
              width={64}
              height={64}
              className="w-[64px] h-[64px] rounded-full"
            />
          )}
          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold text-primary">
              {testimonial?.userId?.fullName}
            </h1>
            <p className="text-gray-600 text-sm">
              {testimonial?.userId?.occupation}
            </p>
          </div>
        </div>
        <Rate allowHalf disabled defaultValue={testimonial?.rating} />
      </div>
      <p className="text-gray-600 mt-5 text-sm md:text-base">
        {testimonial?.comment}
      </p>
    </div>
  );
};

export default TestimonialsCard;
