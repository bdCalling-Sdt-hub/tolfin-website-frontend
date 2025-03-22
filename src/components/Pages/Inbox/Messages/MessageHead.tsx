import ButtonComponent from "@/components/ui/ButtonComponent";
import { imageBaseUrl } from "@/config/config";
import {
  useAddBlockUserMutation,
  useGetBlockedUserQuery,
  useUnBlockUserMutation,
} from "@/redux/features/blockUser/blockUserApi";
import {
  useGetFlowersQuery,
  useRemoveFlowerMutation,
  useSendFlowerMutation,
} from "@/redux/features/flower/flowerApi";
import { useReportMutation } from "@/redux/features/report/reportApi";
import { TError } from "@/types/error";
import { IFlower } from "@/types/flower";
import { IReceiverUser } from "@/types/user.Type";
import { Button, Dropdown, Input, MenuProps, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { TbCurrentLocation } from "react-icons/tb";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { RiInformation2Fill } from "react-icons/ri";
interface IMessageHeadProps {
  receiverDetails: IReceiverUser;
  showHistory: boolean;
  setShowHistory: React.Dispatch<React.SetStateAction<boolean>>;
}
const MessageHead = ({
  receiverDetails,
  showHistory,
  setShowHistory,
}: IMessageHeadProps) => {
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);
  const [customReason, setCustomReason] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  //get flowers
  const { data: response } = useGetFlowersQuery(undefined);
  const myFlowers = response?.data?.attributes?.results;
  //check if the user has already sent a flower
  const hasSentFlower = myFlowers?.find(
    (flower: IFlower) => flower?.receiverId?._id === receiverDetails?._id
  );

  //send flower api hook
  const [sendFlower] = useSendFlowerMutation();
  const [removeFlower] = useRemoveFlowerMutation();

  //block user api hook
  const { data: blockUsers } = useGetBlockedUserQuery(undefined);
  const blockUser = blockUsers?.data?.attributes?.results;
  const [addBlockUser] = useAddBlockUserMutation();
  const [unBlockUser] = useUnBlockUserMutation();
  const hasBlockedUser = blockUser?.find(
    (data: { blockedUser: { _id: string } }) =>
      data?.blockedUser?._id === receiverDetails?._id
  );
  //report user api
  const [reportUser] = useReportMutation();

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
      await unBlockUser(receiverDetails?._id).unwrap();
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
      formData.append("reportedUser", receiverDetails?._id);
      formData.append("reportReason", customReason);
      formData.append("reportMessage", reason);
      await reportUser(formData).unwrap();
      Swal.fire({
        title: "Thank you for reporting!",
        text: "We will take appropriate action.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#004BAD",
        showCancelButton: false,
      });
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
      await removeFlower(receiverDetails?._id).unwrap();
      toast.success("Flower removed successfully");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "flower",
      label: (
        <>
          {hasSentFlower ? (
            <div
              onClick={handleRemoveFlower}
              className="flex items-center gap-2 p-2"
            >
              <span>Remove Flower</span>
            </div>
          ) : (
            <div
              onClick={() => handleSendFlower(receiverDetails?._id)}
              className="flex items-center gap-2 p-2"
            >
              <span>Send Flower</span>
            </div>
          )}
        </>
      ),
    },
    {
      key: "block",
      label: (
        <>
          {hasBlockedUser ? (
            <div
              onClick={handleUnBlockUser}
              className="flex items-center gap-2 p-2"
            >
              <span>Unblock User</span>
            </div>
          ) : (
            <div
              onClick={() => handleBlockUser(receiverDetails?._id)}
              className="flex items-center gap-2 p-2"
            >
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
          <span>Report User</span>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-full px-4 py-3.5 flex justify-between items-center gap-5 bg-white border-b">
        <div className="flex items-center gap-3 flex-shrink-0">
          {receiverDetails?.profileImage?.imageUrl && (
            <Image
              src={`${imageBaseUrl}${receiverDetails?.profileImage?.imageUrl}`}
              alt="profile"
              width={80}
              height={80}
              className="size-12 md:size-16 rounded-xl flex-shrink-0"
            />
          )}
          <div className="w-full space-y-1">
            <h1 className="text-lg md:text-xl font-medium">
              {receiverDetails?.fullName}
            </h1>
            <button className="flex items-center gap-2">
              <TbCurrentLocation className="size-5 text-[#615EF0] animate-pulse" />
              <p className="text-sm text-gray-500">
                {receiverDetails?.address}
              </p>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <button className="p-2 rounded-full text-white flex justify-center items-center gap-3">
              <BsThreeDots className="size-9 text-[#615EF0]" />
            </button>
          </Dropdown>
          <RiInformation2Fill
            onClick={() => setShowHistory(!showHistory)}
            className={`size-8 ${showHistory ? "text-[#615EF0]" : "text-gray-700"} cursor-pointer`}
          />
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setReason(e.target.value)
              }
            />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <ButtonComponent className="bg-rose-500 hover:bg-rose-600" onClick={handleCloseReportModal}>
              Cancel
            </ButtonComponent>
            <ButtonComponent onClick={handleReasonSubmit}>
              Submit
            </ButtonComponent>
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
          <ButtonComponent key="submit" onClick={handleReportSubmit}>
            OK
          </ButtonComponent>,
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
    </>
  );
};

export default MessageHead;
