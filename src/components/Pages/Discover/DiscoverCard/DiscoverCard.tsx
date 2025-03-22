"use client";
import { imageBaseUrl } from "@/config/config";
import { TUser } from "@/types/user.Type";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import Image from "next/image";
import { IoCameraOutline } from "react-icons/io5";
import useUser from "@/hooks/useUser";
import { useAppDispatch } from "@/redux/hooks";
import { openModal } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
const DiscoverCard = ({ discover }: { discover: TUser }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useUser();
  const handleCardClick = () => {
    if (!user) {
      dispatch(openModal());
      return;
    }
    router.push(`/singles/${discover._id}`);
  };
  return (
    <div className="w-full bg-white rounded-xl p-3">
      <div onClick={handleCardClick} className="w-full h-56 xl:h-72 relative">
        {discover?.profileImage?.imageUrl && (
          <Image
            src={`${imageBaseUrl}${discover?.profileImage?.imageUrl}`}
            alt="profile"
            fill
            className="absolute rounded cursor-pointer"
          />
        )}
        <div className="bottom-4 left-4 absolute rounded flex items-center gap-3">
          <IoCameraOutline className="size-7 text-white" />
          <h1 className="text-white font-semibold">
            {discover.photoGallery?.length}
          </h1>
        </div>
      </div>
      <div className="w-full px-3  py-5 space-y-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-semibold text-primary">
              {discover?.fullName}
            </h1>
          </div>
          <p className="text-gray-600">{discover?.isOnline}</p>
          {discover?.isOnline ? (
            <div className="size-3  rounded-full bg-green-500"></div>
          ) : (
            <div className="size-3 rounded-full bg-gray-500"></div>
          )}
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-gray-600 py-2">{discover?.age}</p>
          <h1>
            {discover?.gender && discover?.gender === "Male" ? (
              <IoIosMale className="size-5" />
            ) : (
              <IoIosFemale className="size-5" />
            )}
          </h1>
          <p className="text-gray-600 py-2">{discover?.address}</p>
        </div>
        <p className="text-gray-600">{discover?.aboutMe}</p>
      </div>
    </div>
  );
};

export default DiscoverCard;
