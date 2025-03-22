"use client";
import Image from "next/image";
import {
  FaBriefcase,
  FaCamera,
  FaCity,
  FaCode,
  FaFlag,
  FaGlobe,
  FaGraduationCap,
  FaHeart,
  FaMale,
  FaMapMarkerAlt,
  FaSmoking,
  FaTrashAlt,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { useEffect, useState } from "react";
import {  Spin, Tabs } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { Photo } from "../AddPhoto/AddPhoto";
import EditProfile from "./EditProfile";
import useUser from "@/hooks/useUser";
import { imageBaseUrl } from "@/config/config";
import {
  useAddOrUpdatePhotoGalleryMutation,
  useDeletePhotoGalleryMutation,
  useUpdateCoverImageMutation,
  useUpdateProfileImageMutation,
} from "@/redux/features/profile/profileApi";
import { toast } from "sonner";
import { TError } from "@/types/error";
import { FaChildren } from "react-icons/fa6";

const MyProfile = () => {
  const [coverPhoto, setCoverPhoto] = useState();
  const [additionalPhotos, setAdditionalPhotos] = useState<Photo[]>([]);
  const [isProfileEdit, setIsProfileEdit] = useState<boolean>(false);
  const discover = useUser();
  const [uploadProfileImage] = useUpdateProfileImageMutation();
  const [uploadCoverPhoto] = useUpdateCoverImageMutation();
  const [uploadPhotoGallery, { isLoading: isLoadingPhotoGallery }] =
    useAddOrUpdatePhotoGalleryMutation();
  const [deletePhotoGalleryImage] = useDeletePhotoGalleryMutation();

  useEffect(() => {
    if (discover) {
      setAdditionalPhotos(discover?.photoGallery);
      setCoverPhoto(discover?.coverImage?.imageUrl);
    }
  }, [discover]);
  const handleProfilePhotoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("profile_image", file as File);
        await uploadProfileImage(formData).unwrap();
        toast.success("Profile photo uploaded successfully");
      } catch (error) {
        const err = error as TError;
        toast.error(err?.data?.message || "Something went wrong!");
      }
    }
  };

  const handleAdditionalPhotoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("photo_album", file);
      });
      await uploadPhotoGallery(formData).unwrap();
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const handleDeleteAdditionalPhoto = async (id: string) => {
    try {
      await deletePhotoGalleryImage(id).unwrap();
      toast.success("Photo Gallery Image Deleted success fully");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const additionalPhotoUploadButton = (
    <label htmlFor="additional-photo-upload" className="cursor-pointer">
      <div className="size-16 rounded-full border-2 border-dashed border-gray-950 flex items-center justify-center">
        <AiOutlinePlus className="text-gray-950 mx-auto size-8" />
      </div>
      <input
        id="additional-photo-upload"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleAdditionalPhotoUpload}
      />
    </label>
  );

  const tabItems = [
    {
      key: "1",
      label: "About Me",
      children: (
        <div className="space-y-5">
          <div className="w-full bg-white p-5 rounded-lg">
            <p className="text-gray-600 mb-3 text-[16px]">
              {discover?.aboutMe || "N/A"}
            </p>
          </div>
          <div className="w-full bg-white p-5 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-[16px]">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMale className="text-lg" />
                </div>
                <h2 className="font-semibold">Gender:</h2>
                <p>{discover?.gender || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUser className="text-lg" />
                </div>
                <h2 className="font-semibold">Age:</h2>
                <p>{discover?.age || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGlobe className="text-lg" />
                </div>
                <h2 className="font-semibold">Continent:</h2>
                <p>{discover?.continent || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaFlag className="text-lg" />
                </div>
                <h2 className="font-semibold">Country:</h2>
                <p>{discover?.country || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h2 className="font-semibold">State:</h2>
                <p>{discover?.state || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCity className="text-lg" />
                </div>
                <h2 className="font-semibold">City:</h2>
                <p>{discover?.city || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUserFriends className="text-lg" />
                </div>
                <h2 className="font-semibold">Ethnicity:</h2>
                <p>{discover?.ethnicity || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <h2 className="font-semibold">Denomination:</h2>
                <p>{discover?.denomination || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGraduationCap className="text-lg" />
                </div>
                <h2 className="font-semibold">Education:</h2>
                <p>{discover?.education || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaBriefcase className="text-lg" />
                </div>
                <h2 className="font-semibold">Occupation:</h2>
                <p>{discover?.occupation || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <h2 className="font-semibold">Marital Status:</h2>
                <p>{discover?.maritalStatus || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaChildren className="text-lg" />
                </div>
                <h2 className="font-semibold">Have Children</h2>
                <p>{discover?.haveChildren || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaSmoking className="text-lg" />
                </div>
                <h2 className="font-semibold">Smoker</h2>
                <p>{discover?.smoker || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <BiSolidDrink className="text-lg" />
                </div>
                <h2 className="font-semibold">Drinker</h2>
                <p>{discover?.drinker || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCamera className="text-lg" />
                </div>
                <h2 className="font-semibold">Hobby:</h2>
                <p>
                  {discover?.hobby?.length > 0
                    ? discover.hobby.join(", ") // Join hobbies with comma and space
                    : "No hobbies available"}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCode className="text-lg" />
                </div>
                <h2 className="font-semibold">Interest:</h2>
                <p>
                  {discover?.interests?.length > 0
                    ? discover.interests.join(", ") // Join interests with comma and space
                    : "No interests available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Photos",
      children: (
        <div className="p-5">
          <h1 className="text-xl font-semibold mb-3">Photos</h1>
          <div className="flex flex-wrap gap-4">
            {additionalPhotos.map((image) => (
              <div key={image._id} className="w-60 h-64 relative">
                {image?.imageUrl && (
                  <Image
                    src={`${imageBaseUrl}${image?.imageUrl}`}
                    alt="profile"
                    fill
                    className="w-full h-full absolute object-cover"
                  />
                )}
                <div
                  className="p-2 flex cursor-pointer justify-end items-center bg-opacity-65 absolute top-2 right-2 bg-white rounded-full"
                  onClick={() => handleDeleteAdditionalPhoto(image._id)}
                >
                  <FaTrashAlt className="size-5 text-rose-500" />
                </div>
              </div>
            ))}
            <div className="w-60 h-64 border border-gray-950 flex justify-center items-center">
              {isLoadingPhotoGallery ? (
                <Spin size="large" />
              ) : (
                additionalPhotoUploadButton
              )}
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Handle file upload
  const handleCoverPhotoFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    try {
      const formData = new FormData();
      formData.append("cover_image", file as File);
      await uploadCoverPhoto(formData).unwrap();
      toast.success("Cover photo uploaded successfully");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section className="w-full bg-secondary">
      {/* Cover Image Section */}
      <div className="w-full h-[350px] relative">
        {coverPhoto && (
          <Image
            src={`${imageBaseUrl}${coverPhoto}`}
            fill
            className="w-full h-full object-cover object-left-top absolute"
            alt="cover"
          />
        )}
        {/* Edit Cover Photo Button */}
        <div className="absolute bottom-5 right-5">
          <label htmlFor="upload-cover-photo" className="cursor-pointer">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg">
              <FaCamera className="text-lg" />
              <span>Edit Cover Photo</span>
            </div>
          </label>
          <input
            id="upload-cover-photo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleCoverPhotoFileUpload}
          />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="w-full md:container px-5 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative">
              <div className="w-[220px] h-[220px] relative -mt-0 md:-mt-48">
                {discover && discover?.profileImage?.imageUrl && (
                  <Image
                    src={`${imageBaseUrl}${discover?.profileImage?.imageUrl}`}
                    alt="profileImage"
                    fill
                    className="absolute w-full h-full object-cover rounded-full"
                  />
                )}
              </div>
              <div className="bg-white p-3 rounded-full absolute bottom-2 right-2 cursor-pointer">
                <label htmlFor="profile-photo-upload">
                  <FaCamera className="text-3xl text-primary size-6 cursor-pointer  " />
                </label>
                <input
                  id="profile-photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePhotoUpload}
                />
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl">{discover?.fullName || "N/A"}</h1>
              <div className="flex flex-col md:flex-row  gap-2 md:gap-5">
                <h1 className="text-lg text-gray-600">Age : {discover?.age || "N/A"}</h1>
                <h1 className="text-lg text-gray-600">Location : {discover?.address || "N/A"}</h1>
              </div>
            </div>
          </div>
          {isProfileEdit ? (
            <button
              onClick={() => setIsProfileEdit(false)}
              className="px-8 py-2 bg-rose-500 transition-all duration-300 text-white rounded-lg"
            >
              Cancel
            </button>
          ) : (
            <div className="flex items-center gap-5">
              <button
                onClick={() => setIsProfileEdit(true)}
                className="px-6 py-3 bg-primary text-white rounded-lg text-sm flex justify-center items-center gap-3"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
        <div className="mt-10">
          {isProfileEdit ? (
            <EditProfile setIsProfileEdit={setIsProfileEdit} />
          ) : (
            <Tabs defaultActiveKey="1" items={tabItems} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
