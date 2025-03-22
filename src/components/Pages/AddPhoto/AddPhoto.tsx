"use client";
import { imageBaseUrl } from "@/config/config";
import useUser from "@/hooks/useUser";
import {
  useAddOrUpdatePhotoGalleryMutation,
  useDeletePhotoGalleryMutation,
  useUpdateProfileImageMutation,
} from "@/redux/features/profile/profileApi";
import { TError } from "@/types/error";
import { Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";

export type Photo = {
  _id: string;
  imageUrl: string;
  file: File;
};

const AddPhoto: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<Photo | null>(null);
  const [additionalPhotos, setAdditionalPhotos] = useState<Photo[]>([]);
  const [uploadProfileImage, { isLoading }] = useUpdateProfileImageMutation();
  const [uploadPhotoGallery, { isLoading: isLoadingPhotoGallery }] =
    useAddOrUpdatePhotoGalleryMutation();
  const [deletePhotoGalleryImage] = useDeletePhotoGalleryMutation();
  const user = useUser();

  useEffect(() => {
    if (user) {
      setProfilePhoto(user?.profileImage?.imageUrl);
      setAdditionalPhotos(user?.photoGallery);
    }
  }, [user]);
  const handleProfilePhotoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("profile_image", file as File);
        await uploadProfileImage(formData).unwrap();
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

  const profilePhotoUploadButton = (
    <label htmlFor="profile-photo-upload" className="cursor-pointer">
      <div className="size-16 rounded-full border-2 border-dashed border-gray-950 flex items-center justify-center">
        <AiOutlinePlus className="text-gray-950 mx-auto size-8" />
      </div>
      <input
        id="profile-photo-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleProfilePhotoUpload}
      />
    </label>
  );

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

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center  px-5 py-10">
      <div className="w-full md:container p-5 md:p-10">
        {/* Profile Photo Section */}
        <div className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold mb-4 text-primary">
            Add Profile Photo
          </h1>
          <div className="w-60 h-64 border border-gray-950 flex justify-center items-center relative">
            {isLoading ? (
              <Spin />
            ) : (
              <>
                {profilePhoto ? (
                  <div className="w-full h-full relative">
                    <Image
                      src={`${imageBaseUrl}${profilePhoto}`}
                      alt="profile"
                      fill
                      className="w-full h-full absolute"
                    />
                    <div className="p-2 flex cursor-pointer justify-end items-center bg-opacity-65 absolute top-2 right-2 bg-white rounded-full">
                      <label htmlFor="profile-photo-upload">
                        <AiOutlinePlus className="size-5 text-blue-500 cursor-pointer" />
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
                ) : (
                  profilePhotoUploadButton
                )}
              </>
            )}
          </div>
        </div>

        {/* Additional Photos Section */}
        <div className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold mb-4 text-primary">
            Add More Photos To Your Profile
          </h1>
          <div className="flex flex-wrap gap-4">
            {additionalPhotos.map((image) => (
              <div key={image._id} className="w-60 h-64 relative">
                <Image
                  src={`${imageBaseUrl}${image?.imageUrl}`}
                  alt="profile"
                  fill
                  className="w-full h-full absolute object-cover"
                />
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

        {/* Next Button */}
        <div className="flex justify-end">
          <Link href="/enhance-profile">
            <button className="px-6 py-2 bg-primary hover:bg-[#193f72] transition-all duration-300 text-white rounded-lg">
              Next →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
