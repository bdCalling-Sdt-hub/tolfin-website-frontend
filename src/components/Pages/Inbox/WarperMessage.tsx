"use client";
import Messages from "./Messages/Messages";
import { useParams, useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import { useGetChatQuery } from "@/redux/features/inbox/inboxApi";
import { useGetSingleDiscoverUserQuery } from "@/redux/features/discover/discoverApi";
import { IoChevronBack } from "react-icons/io5";
import { useAppDispatch } from "@/redux/hooks";
import { closeChat } from "@/redux/features/inbox/inboxSlice";

const WarperMessage = () => {
  const user = useUser();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { chatId } = useParams();
  const { data: responseData, isLoading: chatDataLoading } = useGetChatQuery(
    chatId,
    {
      refetchOnMountOrArgChange: true,
      skip: !chatId,
    }
  );
  const chatDetails = responseData?.data?.attributes;
  const receiverId = chatDetails?.participants?.find(
    (p: string) => p !== user?._id
  );
  const { data: receiverResponseData, isLoading: receiverDataLoading } =
    useGetSingleDiscoverUserQuery(receiverId, {
      refetchOnMountOrArgChange: true,
      skip: !receiverId,
    });
  const receiverDetails = receiverResponseData?.data?.attributes;
  const handleChatClose = () => {
    dispatch(closeChat());
    router.push("/my-message");
  };
  return (
    <div className="w-full col-span-full xl:col-span-9 h-[85vh] relative">
      {/* Back icon */}
      <button
        onClick={handleChatClose}
        className="flex md:hidden px-4 py-2 my-3 bg-gray-200 rounded gap-1 items-center justify-center"
      >
        <IoChevronBack />
        Back
      </button>
      {chatId && typeof chatId === "string" && (
        <Messages
          chatId={chatId}
          receiverDetails={receiverDetails}
          isLoading={chatDataLoading || receiverDataLoading}
        />
      )}
    </div>
  );
};

export default WarperMessage;
