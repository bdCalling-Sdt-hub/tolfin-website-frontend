"use client";
import { imageBaseUrl } from "@/config/config";
import useUser from "@/hooks/useUser";
import {
  useAddBlockUserMutation,
  useGetBlockedUserQuery,
  useUnBlockUserMutation,
} from "@/redux/features/blockUser/blockUserApi";
import { useGetSingleDiscoverUserQuery } from "@/redux/features/discover/discoverApi";
import {
  useGetFlowersQuery,
  useRemoveFlowerMutation,
  useSendFlowerMutation,
} from "@/redux/features/flower/flowerApi";
import { useReportMutation } from "@/redux/features/report/reportApi";
import { TError } from "@/types/error";
import { IFlower } from "@/types/flower";
import { TUser } from "@/types/user.Type";
import { Button, Dropdown, Input, MenuProps, Modal, Tabs, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { BsFlower2 } from "react-icons/bs";
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
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdBlock, MdOutlineReport } from "react-icons/md";
import { toast } from "sonner";
import DiscoverDetailsSkeleton from "./DiscoverDetailsSkeleton";
import { useSendMessageMutation } from "@/redux/features/inbox/inboxApi";
import { FaChildren } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
const DiscoverDetails = () => {
  const user = useUser();
  const router = useRouter();
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);
  const [reason, setReason] = useState<string>("");
  const [customReason, setCustomReason] = useState<string>("");
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");
  const { data: responseData, isLoading: isDiscoverUserLoading } =
    useGetSingleDiscoverUserQuery(id, {
      refetchOnMountOrArgChange: true,
      skip: !id,
    });
  const discoverUserDetails: TUser = responseData?.data?.attributes;
  const [sendMessage, { isLoading: isSendingMessage }] =
    useSendMessageMutation();
  const [messageSent, setMessageSent] = useState<boolean>(false);

  //get block users
  const { data: blockUsers } = useGetBlockedUserQuery(undefined);
  const blockUser = blockUsers?.data?.attributes?.results;
  //get flowers
  const { data: response } = useGetFlowersQuery(undefined);
  const myFlowers = response?.data?.attributes?.results;
  //check if the user has already sent a flower
  const hasSentFlower = myFlowers?.find(
    (flower: IFlower) => flower?.receiverId?._id === discoverUserDetails?._id
  );

  //send flower api hook
  const [sendFlower] = useSendFlowerMutation();
  const [removeFlower] = useRemoveFlowerMutation();

  //block user api hook
  const [addBlockUser] = useAddBlockUserMutation();
  const [unBlockUser] = useUnBlockUserMutation();
  const hasBlockedUser = blockUser?.find(
    (data: { blockedUser: { _id: string } }) =>
      data?.blockedUser?._id === discoverUserDetails?._id
  );
  //report user api
  const [reportUser, { isLoading }] = useReportMutation();

  const handleBlockUser = async (blockedUser: string) => {
    try {
      const res = await addBlockUser({ blockedUser });
      if (res.data) {
        toast.success("User blocked successfully");
      }
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const handleUnBlockUser = async () => {
    try {
      await unBlockUser(discoverUserDetails?._id).unwrap();
      toast.success("User unblocked successfully");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const handleOpenReportModal = () => {
    setIsReportModalVisible(true);
  };

  const handleCloseReportModal = () => {
    setIsReportModalVisible(false);
  };

  const handleCustomReasonChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomReason(e.target.value); // Update the custom reason
  };

  const handleReasonSubmit = () => {
    if (reason.trim() === "") {
      toast.error("Please select a reason to report.");
      return;
    }
    setIsReportModalVisible(false);
    setIsConfirmationModalVisible(true);
  };
  const handleReportSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("reportedUser", discoverUserDetails?._id);
      formData.append("reportReason", customReason);
      formData.append("reportMessage", reason);
      const res = await reportUser(formData).unwrap();
      toast.success(res.message);
      setIsConfirmationModalVisible(false);
      setReason("");
      setCustomReason("");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalVisible(false);
  };

  const handleSendFlower = async (userId: string) => {
    try {
      await sendFlower({
        receiverId: userId,
      }).unwrap();
      toast.success("Flower sent successfully");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };
  const handleRemoveFlower = async () => {
    try {
      await removeFlower(discoverUserDetails?._id).unwrap();
      toast.success("Flower removed successfully");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const handleSendMessage = async () => {
    if (!user || !message.trim()) return;
    try {
      const formData = new FormData();
      formData.append("message", message);
      formData.append("receiverId", discoverUserDetails?._id);
      const res = await sendMessage(formData).unwrap();
      const chatId = res?.data?.attributes?.chatId;
      router.push(`/my-message/${chatId}`);
      setMessageSent(false); // Close the modal after sending the message
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const tabItems = [
    {
      key: "1",
      label: "About Me",
      children: (
        <div className="space-y-5">
          {messageSent && (
            <div className="w-full bg-white p-5 rounded-lg space-y-5">
              <TextArea
                placeholder="Write a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 5 }}
                className="w-full"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-primary text-white rounded-lg flex justify-center items-center gap-3"
                  disabled={isSendingMessage}
                >
                  <FiSend className="size-5" />
                  {isSendingMessage ? (
                    <span className="mr-2">Sending...</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
                <button
                  onClick={() => setMessageSent(false)}
                  className="px-6 py-3 bg-rose-500 text-white rounded-lg flex justify-center items-center gap-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <div className="w-full bg-white p-5 rounded-lg">
            <p className="text-gray-600 mb-3 text-[16px]">
              {discoverUserDetails?.aboutMe}
            </p>
          </div>
          <div className="w-full bg-white p-5 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-[16px]">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMale className="text-lg" />
                </div>
                <h2 className="font-semibold">Gender:</h2>
                <p>{discoverUserDetails?.gender}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUser className="text-lg" />
                </div>
                <h2 className="font-semibold">Age:</h2>
                <p>{discoverUserDetails?.age}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGlobe className="text-lg" />
                </div>
                <h2 className="font-semibold">Continent:</h2>
                <p>{discoverUserDetails?.continent}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaFlag className="text-lg" />
                </div>
                <h2 className="font-semibold">Country:</h2>
                <p>{discoverUserDetails?.country}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h2 className="font-semibold">State:</h2>
                <p>{discoverUserDetails?.state}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCity className="text-lg" />
                </div>
                <h2 className="font-semibold">City:</h2>
                <p>{discoverUserDetails?.city}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUserFriends className="text-lg" />
                </div>
                <h2 className="font-semibold">Ethnicity:</h2>
                <p>{discoverUserDetails?.ethnicity}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <h2 className="font-semibold">Denomination:</h2>
                <p>{discoverUserDetails?.denomination}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGraduationCap className="text-lg" />
                </div>
                <h2 className="font-semibold">Education:</h2>
                <p>{discoverUserDetails?.education}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaBriefcase className="text-lg" />
                </div>
                <h2 className="font-semibold">Occupation:</h2>
                <p>{discoverUserDetails?.occupation}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <h2 className="font-semibold">Marital Status:</h2>
                <p>{discoverUserDetails?.maritalStatus}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaChildren className="text-lg" />
                </div>
                <h2 className="font-semibold">Have Children</h2>
                <p>{discoverUserDetails?.haveChildren || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaSmoking className="text-lg" />
                </div>
                <h2 className="font-semibold">Smoker</h2>
                <p>{discoverUserDetails?.smoker || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <BiSolidDrink className="text-lg" />
                </div>
                <h2 className="font-semibold">Drinker</h2>
                <p>{discoverUserDetails?.drinker || "N/A"}</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCamera className="text-lg" />
                </div>
                <h2 className="font-semibold">Hobby:</h2>
                <p>
                  {discoverUserDetails?.hobby &&
                  discoverUserDetails?.hobby?.length > 0
                    ? discoverUserDetails?.hobby.join(", ") // Join hobbies with comma and space
                    : "No hobbies available"}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCode className="text-lg" />
                </div>
                <h2 className="font-semibold">Interest:</h2>
                <p>
                  {discoverUserDetails?.interests &&
                  discoverUserDetails?.interests?.length > 0
                    ? discoverUserDetails.interests.join(", ") // Join interests with comma and space
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
          {discoverUserDetails?.photoGallery?.length === 0 ? (
            <p className="text-gray-600">No photos available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {discoverUserDetails?.photoGallery?.map((image) => (
                <div key={image._id} className="w-full h-56 md:h-60 xl:h-72 relative">
                  {image?.imageUrl && (
                    <Image
                      src={`${imageBaseUrl}${image?.imageUrl}`}
                      alt="profile"
                      fill
                      className="w-full h-full absolute object-cover rounded-lg"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "block",
      label: (
        <>
          {hasBlockedUser ? (
            <div
              onClick={handleUnBlockUser}
              className="flex items-center gap-2 p-2"
            >
              <MdBlock className="text-rose-500 size-5" />
              <span>Unblock User</span>
            </div>
          ) : (
            <div
              onClick={() => handleBlockUser(discoverUserDetails?._id)}
              className="flex items-center gap-2 p-2"
            >
              <MdBlock className="text-rose-500 size-5" />
              <span>Block User</span>
            </div>
          )}
        </>
      ),
    },
    {
      key: "report",
      label: (
        <div
          onClick={handleOpenReportModal}
          className="flex items-center gap-2 p-2"
        >
          <MdOutlineReport className="text-rose-500 size-5" />
          <span>Report User</span>
        </div>
      ),
    },
  ];

  if (isDiscoverUserLoading) {
    return <DiscoverDetailsSkeleton />;
  }

  return (
    <section className="w-full bg-secondary">
      <div className="w-full h-[350px] relative">
        {discoverUserDetails?.coverImage?.imageUrl ? (
          <Image
            src={`${imageBaseUrl}${discoverUserDetails?.coverImage?.imageUrl}`}
            fill
            className="w-full h-full object-cover object-left-top  absolute"
            alt="cover"
          />
        ) : (
          <Image
            src="/images/cover.jpg"
            fill
            className="w-full h-full object-cover object-left-top  absolute"
            alt="cover"
          />
        )}
      </div>
      <div className="w-full md:container px-5  py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-[220px] h-[220px] relative -mt-0 md:-mt-48">
              {discoverUserDetails &&
                discoverUserDetails?.profileImage?.imageUrl && (
                  <Image
                    src={`${imageBaseUrl}${discoverUserDetails?.profileImage?.imageUrl}`}
                    alt="profileImage"
                    fill
                    className="absolute w-full h-full object-cover rounded-full"
                  />
                )}
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl">
                {discoverUserDetails?.fullName}
              </h1>
              <div className="flex items-center gap-5">
                <h1 className="text-lg text-gray-600">
                  Age : {discoverUserDetails?.age}
                </h1>
                <h1 className="text-lg text-gray-600">
                  {discoverUserDetails?.address}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {!messageSent && (
              <button
                onClick={() => setMessageSent(true)}
                className="px-6 py-3 bg-primary text-white rounded-lg flex justify-center items-center gap-3"
              >
                <FiSend className="size-5" /> Message
              </button>
            )}
            {/* flowers */}
            {hasSentFlower ? (
              <Tooltip title="Remove flower" color="#A0A0A0">
                <button
                  onClick={handleRemoveFlower}
                  className="size-12 flex justify-center items-center rounded-full bg-[#E6EDFA]"
                >
                  <BsFlower2 className="size-6 text-rose-500" />
                </button>
              </Tooltip>
            ) : (
              <Tooltip title="Send flower" color="#A0A0A0">
                <button
                  onClick={() => handleSendFlower(discoverUserDetails?._id)}
                  className="size-12 flex justify-center items-center rounded-full bg-[#E6EDFA]"
                >
                  <BsFlower2 className="size-6 text-primary" />
                </button>
              </Tooltip>
            )}
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <button className="size-[50px] rounded-full text-white bg-[#cedaf0] flex justify-center items-center gap-3">
                <HiDotsHorizontal className="size-5 text-gray-800" />
              </button>
            </Dropdown>
          </div>
        </div>
        <div className="mt-10">
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      </div>
      {/* Report User Modal */}
      <Modal
        title="Report User"
        centered
        open={isReportModalVisible}
        onCancel={handleCloseReportModal}
        footer={null}
        width={500}
      >
        <div className="space-y-5">
          <p>Select a reason to report this user:</p>
          <div className="space-y-3">
            <Button
              block
              type={reason === "Inappropriate Content" ? "primary" : "default"}
              onClick={() => setReason("Inappropriate Content")}
            >
              Inappropriate Content
            </Button>
            <Button
              block
              type={reason === "Harassment" ? "primary" : "default"}
              onClick={() => setReason("Harassment")}
            >
              Harassment
            </Button>
            <Button
              block
              type={reason === "Spam" ? "primary" : "default"}
              onClick={() => setReason("Spam")}
            >
              Spam
            </Button>
            <Button
              block
              type={reason === "Fake Profile" ? "primary" : "default"}
              onClick={() => setReason("Fake Profile")}
            >
              Fake Profile
            </Button>
            <Input
              placeholder="Other (Please specify)"
              value={reason === "Other" ? "" : reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button onClick={handleCloseReportModal}>Cancel</Button>
            <Button type="primary" onClick={handleReasonSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>

      {/* Confirmation Modal with TextArea for custom message */}
      <Modal
        title="Additional Comments"
        centered
        open={isConfirmationModalVisible}
        onCancel={handleCloseConfirmationModal}
        footer={[
          <Button
            loading={isLoading}
            key="submit"
            type="primary"
            onClick={handleReportSubmit}
          >
            OK
          </Button>,
          <Button key="back" onClick={handleCloseConfirmationModal}>
            Close
          </Button>,
        ]}
      >
        {/* Custom message TextArea */}
        <div className="mt-4">
          <TextArea
            placeholder="Provide additional details if necessary"
            value={customReason}
            onChange={handleCustomReasonChange}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
      </Modal>
    </section>
  );
};

export default DiscoverDetails;
