import { imageBaseUrl } from "@/config/config";
import { IFlower } from "@/types/flower";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegComment } from "react-icons/fa";

const FlowerCard = ({ flower }: { flower: IFlower }) => {
  return (
    <div className="w-full bg-white rounded-xl p-3">
      <div className="w-full h-56 relative">
        {flower?.senderId?.profileImage?.imageUrl && (
          <Image
            // src={`https://ui-avatars.com/api/?name=${flower?.senderId?.fullName}&background=random&color=fff&size=256&length=1&bold=true&rounded=true&bold=true`}
            src={`${imageBaseUrl}${flower?.senderId?.profileImage?.imageUrl}`}
            alt="profile"
            fill
            className="absolute rounded-xl"
          />
        )}
      </div>
      <div className="w-full p-5">
        <h1 className="text-xl font-semibold text-primary">
          {flower?.senderId?.fullName}
        </h1>
        <p className="text-gray-600 py-2">{flower?.senderId?.age}</p>
        <p className="text-gray-600">Address : {flower?.senderId?.address}</p>
        <p className="text-gray-600 py-2">{flower?.senderId?.aboutMe}</p>
        <div className="flex gap-5 items-center mt-5">
          <Link href={`/discover/${flower?.senderId?._id}`}>
            <button className="px-5 py-2 bg-primary text-white rounded-lg">
              View Profile
            </button>
          </Link>
          <button className="size-12 flex justify-center items-center rounded-full bg-[#E6EDFA]">
            <FaRegComment className="size-6 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
