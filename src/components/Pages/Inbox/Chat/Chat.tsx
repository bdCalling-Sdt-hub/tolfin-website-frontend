"use client";
import { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import { FaPlus } from "react-icons/fa";
import { IChat } from "@/types/chatTypes";
import {
  useGetChatsQuery,
  useCreateChatMutation,
} from "@/redux/features/inbox/inboxApi";
import { useGetAllDiscoverUserQuery } from "@/redux/features/discover/discoverApi";
import { TUser } from "@/types/user.Type";
import { imageBaseUrl } from "@/config/config";
import ChatListCard from "./ChatListCard";
import { useRouter } from "next/navigation";
import ChatListCardSkeleton from "./ChatListCardSkeleton";
import Image from "next/image";
import { TError } from "@/types/error";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import useUser from "@/hooks/useUser";

const Chat = () => {
  const user = useUser();
  const [searchChatUser, setSearchChatUser] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const isChatOpen = useAppSelector((state) => state.inbox.isChatOpen);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    fullName: string;
  } | null>(null);
  const router = useRouter();

  const { data: responseData, isLoading: chatLoading } = useGetChatsQuery({
    page: 1,
    limit: 12,
    userName: searchChatUser,
  });
  const totalResults = responseData?.data?.attributes?.totalResults;
  const [chats, setChats] = useState<IChat[]>([]);

  const { data: userResponseData } = useGetAllDiscoverUserQuery(
    { userId: user?._id, page: 1, limit: 12 },
    { refetchOnMountOrArgChange: true }
  );

  const allUsers = userResponseData?.data?.attributes?.results;
  const filteredUsers = allUsers?.filter((user: TUser) =>
    user?.fullName?.toLowerCase().includes(search?.trim().toLowerCase())
  );

  const [createChat, { isLoading }] = useCreateChatMutation();

  /** 📌 Sort chats whenever new data is received */
  useEffect(() => {
    if (responseData?.data?.attributes?.results) {
      console.log("Chats:", responseData?.data?.attributes?.results);
      // **Sort chats by `updatedAt` (newest first)**
      const sortedChats = [...responseData.data.attributes.results].sort(
        (a, b) =>
          new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime()
      );
      setChats(sortedChats);
    }
  }, [responseData]);

  /** 📌 Handle Chat Creation */
  const handleCreateChat = async () => {
    if (!selectedUser) return;
    try {
      const res = await createChat({ receiverId: selectedUser?.id }).unwrap();
      const chatId = res?.data?.attributes?._id;
      router.push(`/my-message/${chatId}`);
      setIsModalOpen(false);
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  /** 📌 Render content */
  let content = null;

  if (chatLoading && chats.length <= 0) {
    content = (
      <div className="w-full flex flex-col gap-2 px-5 py-4 overflow-y-auto">
        {[...Array(6)].map((_, index) => (
          <ChatListCardSkeleton key={index} />
        ))}
      </div>
    );
  } else if (!chatLoading && totalResults === 0) {
    content = (
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold">No Chats Found</h1>
      </div>
    );
  } else if (!chatLoading && totalResults > 0) {
    content = (
      <div className={`w-full  flex flex-col gap-2 px-5 py-4 overflow-y-auto`}>
        {chats.map((chat: IChat) => (
          <ChatListCard key={chat._id} chat={chat} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`w-full h-[85vh] ${
        isChatOpen ? "hidden" : "block"
      } xl:block col-span-full xl:col-span-3 bg-[#FEFEFF] border-r border-[#E5E5E5]`}
    >
      {/* Chat Header */}
      <div className="w-full flex items-center px-5 py-7">
        <h1 className="text-xl md:text-2xl font-semibold">Messages</h1>
        <button
          className="ml-auto size-9 bg-[#615EF0] flex items-center justify-center rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="size-4 text-white" />
        </button>
      </div>
      <hr />

      {/* Search Bar */}
      <div className="w-full px-5 py-4">
        <input
          type="text"
          value={searchChatUser}
          onChange={(e) => setSearchChatUser(e.target.value)}
          placeholder="Search here"
          className="w-full px-5 py-3 bg-[#F3F3F3] rounded-xl border border-transparent outline-none focus:border-primary"
        />
      </div>

      {/* Chat List (Dynamically Sorted) */}
      {content}

      {/* Modal for New Chat */}
      <Modal
        title={<h1 className="text-2xl">New Message</h1>}
        open={isModalOpen}
        centered
        onCancel={handleClose}
        footer={[
          <button
            key="createChat"
            disabled={!selectedUser}
            onClick={handleCreateChat}
            className={`w-full px-5 py-3 rounded-xl ${
              selectedUser ? "bg-primary" : "bg-gray-500"
            }  text-white`}
          >
            Chat
          </button>,
        ]}
      >
        <div className="mb-3 space-y-2">
          <span className="font-semibold">
            To: {selectedUser ? selectedUser.fullName : ""}
          </span>
          <Input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-4/5"
          />
        </div>
        <div className="font-semibold text-gray-500 mb-2">Suggested</div>
        <div className="w-full max-h-96 overflow-y-auto">
          {isLoading ? (
            <p className="text-gray-500 text-center py-2">Loading...</p>
          ) : filteredUsers?.length > 0 ? (
            filteredUsers?.map((user: TUser) => (
              <div
                key={user._id}
                className={`cursor-pointer hover:bg-gray-100 px-4 py-3 rounded-md flex justify-between items-center ${
                  selectedUser?.id === user._id ? "bg-blue-100" : ""
                }`}
                onClick={() =>
                  setSelectedUser({ id: user._id, fullName: user.fullName })
                }
              >
                <div className="flex items-center">
                  <Image
                    src={`${imageBaseUrl}${user?.profileImage?.imageUrl}`}
                    alt={user?.fullName}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="ml-3 text-gray-700">{user?.fullName}</span>
                </div>
                <input
                  type="radio"
                  checked={selectedUser?.id === user._id}
                  className="w-4 h-4 accent-blue-500"
                  readOnly
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-2">No users found</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
