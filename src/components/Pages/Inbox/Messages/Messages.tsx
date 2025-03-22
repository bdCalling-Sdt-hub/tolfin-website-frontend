"use client";
import { imageBaseUrl } from "@/config/config";
import useUser from "@/hooks/useUser";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "@/redux/features/inbox/inboxApi";
import { IMessage, MessageType } from "@/types/messagesType";
import { IReceiverUser } from "@/types/user.Type";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import { FiSend } from "react-icons/fi";
import { TbPhoto } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import moment from "moment";
import MessageHead from "./MessageHead";
import MessageHeadSkeleton from "./MessageHeadSkeleton";
import Skeleton from "@/components/ui/Skeleton";
import { TError } from "@/types/error";
import { toast } from "sonner";
import { Drawer } from "antd";
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
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
interface IFile {
  id: string;
  previewUrl: string;
  file: File;
}

const Messages = ({
  chatId,
  receiverDetails,
  isLoading,
}: {
  chatId: string;
  receiverDetails: IReceiverUser;
  isLoading: boolean;
}) => {
  const user = useUser();
  const [message, setMessage] = useState<string>("");
  const [files, setFiles] = useState<IFile[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(moment()); // Store current time
  const messagesRef = useRef<HTMLDivElement>(null);
  const [showTimestampMap, setShowTimestampMap] = useState<{
    [key: string]: boolean;
  }>({});

  // Fetch messages
  const { data: responseData, isLoading: messagesLoading } =
    useGetMessagesQuery(chatId, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 60000, // Poll every 1 minute
      skip: !chatId,
    });

  const allMessages = useMemo(
    () => responseData?.data?.attributes?.results || [],
    [responseData]
  );

  // Send message mutation
  const [sendMessage, { isLoading: sendMessageLoading }] =
    useSendMessageMutation();

  const handleClick = (messageId: string) => {
    setShowTimestampMap((prev) => {
      const updatedTimestampMap = { ...prev };

      // Hide all timestamps first
      Object.keys(updatedTimestampMap).forEach((id) => {
        updatedTimestampMap[id] = false;
      });

      // Show timestamp for the clicked message
      updatedTimestampMap[messageId] = true;

      return updatedTimestampMap;
    });
  };
  const handleSendMessage = async () => {
    if (!user || (!message.trim() && files.length === 0) || !chatId) return;

    try {
      const formData = new FormData();
      formData.append("chatId", chatId);
      formData.append("receiverId", receiverDetails?._id);
      if (message.trim()) {
        formData.append("message", message.trim());
      }
      files.forEach((fileData) => {
        formData.append("files", fileData.file);
      });
      await sendMessage(formData).unwrap();

      // Clear input & files after sending
      setMessage("");
      setFiles([]);
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles: IFile[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        newFiles.push({
          id: file.name + Date.now(),
          previewUrl: URL.createObjectURL(file),
          file,
        });
      }
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const openLightbox = (images: string[]) => {
    setLightboxImages(images);
    setLightboxOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment()); // Update current time every 60 seconds
    }, 60000); // Runs every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    setTimeout(() => {
      // Select the messages container and scroll to the bottom
      const messagesBox = document.querySelector(".messages-box");
      if (messagesBox) {
        messagesBox.scrollTop = messagesBox.scrollHeight; // Scroll to bottom
      }

      // Focus on the input field after scrolling
      const inputField = document.getElementById(
        "input-message"
      ) as HTMLTextAreaElement | null;
      if (inputField) {
        inputField.focus();
      }
    }, 100); // Small delay ensures UI updates before scrolling
  }, [allMessages]);
  const renderInfo = (info: string | number | undefined | string[]) => {
    if (!info || (Array.isArray(info) && info.length === 0)) {
      return "N/A";
    }
    return Array.isArray(info) ? info.join(", ") : info;
  };
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-12 h-[85vh] relative bg-white">
      <div className={`w-full md:col-span-12 flex flex-col`}>
        {isLoading ? (
          <MessageHeadSkeleton />
        ) : (
          <MessageHead
            receiverDetails={receiverDetails}
            showHistory={showHistory}
            setShowHistory={setShowHistory}
          />
        )}

        {/* Messages */}
        <div
          ref={messagesRef}
          className="w-full overflow-y-auto p-4 space-y-5 h-[calc(85vh-175px)] relative messages-box"
        >
          {messagesLoading
            ? Array.from({ length: 5 }).map((_, index) => {
                const isMyMessage = index % 2 === 0; // Simulating sender/receiver alternation
                return (
                  <div
                    key={index}
                    className={`flex ${
                      isMyMessage ? "justify-end" : "justify-start"
                    } items-end gap-3`}
                  >
                    {/* Sender/Receiver Image */}
                    {!isMyMessage && (
                      <Skeleton
                        width="45px"
                        height="45px"
                        className="rounded-full"
                      />
                    )}

                    {/* Message Content */}
                    <Skeleton
                      width="200px"
                      height="30px"
                      className="rounded-xl"
                    />
                  </div>
                );
              })
            : allMessages.map((message: IMessage) => {
                const isMyMessage = message?.senderId === user?.id;
                const fileUrls = message?.content?.fileUrls || [];
                const showTimestamp = message._id
                  ? showTimestampMap[message._id]
                  : false;
                return (
                  <div
                    key={message._id}
                    className={`flex ${
                      isMyMessage ? "justify-end" : "justify-start"
                    } items-end gap-3`}
                  >
                    {/* Sender/Receiver Image */}
                    {!isMyMessage &&
                      receiverDetails?.profileImage?.imageUrl && (
                        <Image
                          src={`${imageBaseUrl}${receiverDetails?.profileImage?.imageUrl}`}
                          alt="profile"
                          width={40}
                          height={40}
                          className="size-10 md:size-12 object-cover rounded-full flex-shrink-0"
                        />
                      )}

                    {/* Message Content */}
                    <div
                      className={`w-full max-w-[300px] md:max-w-[500px] flex flex-col ${
                        isMyMessage ? "items-end" : "items-start"
                      } flex-shrink-0`}
                      onClick={
                        user?.id === message?.senderId
                          ? () => handleClick(message?._id as string)
                          : undefined
                      }
                    >
                      {/* Mixed Content */}
                      {message?.content?.messageType === MessageType.MIXED && (
                        <div
                          className={`flex flex-col gap-y-2 ${
                            isMyMessage ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className="relative cursor-pointer"
                            onClick={() => openLightbox(fileUrls)}
                          >
                            <Image
                              src={`${imageBaseUrl}${fileUrls[0]}`}
                              alt="image"
                              width={200}
                              height={200}
                              className="object-cover rounded-xl"
                            />
                            {fileUrls.length >= 2 && (
                              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-xl">
                                +{fileUrls.length - 1}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col justify-end">
                            <div
                              className={`p-3 rounded-xl text-sm max-w-xs ${
                                isMyMessage
                                  ? "bg-[#615EF0] text-white"
                                  : "bg-[#F1F1F1] text-black"
                              }`}
                            >
                              {message?.content?.text}
                            </div>
                            {showTimestamp && (
                              <span className="text-xs text-gray-500 animate-slide-up">
                                {moment(message?.createdAt).from(currentTime)}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Text Message */}
                      {message?.content?.messageType === MessageType.TEXT && (
                        <div className="w-full max-w-fit space-y-1 group">
                          <div
                            className={`p-3 rounded-xl text-sm max-w-xs cursor-pointer ${
                              isMyMessage
                                ? "bg-[#615EF0] text-white"
                                : "bg-[#F1F1F1] text-black"
                            }`}
                          >
                            {message?.content?.text}
                          </div>
                          {showTimestamp && (
                            <div className="flex items-center justify-end">
                              <span className="text-xs text-gray-500 animate-slide-up ">
                                {moment(message?.createdAt).from(currentTime)}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Image Message */}
                      {message?.content?.messageType === MessageType.IMAGE && (
                        <div className="group">
                          <div
                            className="relative cursor-pointer"
                            onClick={() => openLightbox(fileUrls)}
                          >
                            <Image
                              src={`${imageBaseUrl}${fileUrls[0]}`}
                              alt="image"
                              width={200}
                              height={200}
                              className="rounded-xl"
                            />
                            {fileUrls.length >= 2 && (
                              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-xl">
                                +{fileUrls.length - 1}
                              </div>
                            )}
                          </div>
                          {showTimestamp && (
                            <span className="text-xs text-gray-500 animate-slide-up">
                              {moment(message?.createdAt).from(currentTime)}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Audio Message */}
                      {message?.content?.messageType === MessageType.AUDIO && (
                        <div>
                          <audio controls>
                            <source
                              src={`${imageBaseUrl}${fileUrls[0]}`}
                              type="audio/mpeg"
                            />
                          </audio>
                          {showTimestamp && (
                            <span className="text-xs text-gray-500 animate-slide-up">
                              {moment(message?.createdAt).from(currentTime)}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Video Message */}
                      {message?.content?.messageType === MessageType.VIDEO && (
                        <div>
                          <video controls width="250">
                            <source
                              src={`${imageBaseUrl}${fileUrls[0]}`}
                              type="video/mp4"
                            />
                          </video>
                          {showTimestamp && (
                            <span className="text-xs text-gray-500 animate-slide-up">
                              {moment(message?.createdAt).from(currentTime)}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Document Message */}
                      {message?.content?.messageType ===
                        MessageType.DOCUMENT && (
                        <div>
                          <a
                            href={`${imageBaseUrl}${fileUrls[0]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            View Document
                          </a>
                          {showTimestamp && (
                            <span className="text-xs text-gray-500 animate-slide-up">
                              {moment(message?.createdAt).from(currentTime)}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={lightboxImages.map((url) => ({
                src: `${imageBaseUrl}${url}`,
              }))}
            />
          )}
        </div>

        {/* File Previews */}
        {files.length > 0 && (
          <div className="absolute bottom-20 w-full p-3 bg-white overflow-x-auto">
            <div className="flex gap-3 flex-nowrap w-max">
              {files.map((file) => (
                <div key={file.id} className="relative flex-shrink-0">
                  <Image
                    src={file?.previewUrl}
                    alt="preview"
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] object-cover rounded-md"
                  />
                  <button
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    onClick={() => handleRemoveFile(file.id)}
                  >
                    <AiOutlineClose size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Section */}
        <div className="w-full bg-white px-3 py-4 flex items-center gap-3">
          <label htmlFor="image">
            <TbPhoto size={28} className="text-gray-500 cursor-pointer" />
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            multiple
            max={4}
            hidden
            onChange={handleFileChange}
          />
          <textarea
            id="input-message"
            placeholder="Type your message..."
            value={message}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="w-full h-12 px-3 py-2 border rounded-xl focus:outline-none resize-none"
            disabled={sendMessageLoading}
          />

          <button
            onClick={handleSendMessage}
            className="bg-[#615EF0] text-white rounded-full p-2"
          >
            <FiSend size={22} />
          </button>
        </div>
      </div>
      {showHistory && (
        <Drawer
          title="User Information"
          onClose={() => setShowHistory(false)}
          open={showHistory}
          className="block md:hidden"
        >
          {" "}
          <div className="w-full max-h-full overflow-y-scroll bg-white p-4 ">
            <div className="pb-5">
              <h1 className="text-xl font-medium text-[#6B6B6B]">Info</h1>
            </div>
            <div className="flex flex-col gap-4 text-[16px]">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMale className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.gender)}
                </p>
              </div>
              {/* Navigate on Click Instead of Using Link */}
              <div className="flex items-center gap-3 flex-wrap cursor-pointer">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUser className="text-lg" />
                </div>
                <p className="text-[#6B6B6B] font-semibold hover:underline hover:text-primary">
                  {renderInfo(receiverDetails?.age)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGlobe className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.continent)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaFlag className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.country)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.state)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaCity className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.city)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaUserFriends className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.ethnicity)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.denomination)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaGraduationCap className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.education)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaBriefcase className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.occupation)}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center">
                  <FaHeart className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.maritalStatus)}
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center flex-shrink-0">
                  <FaCamera className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.hobby)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-9 bg-primary text-white rounded-full flex justify-center items-center flex-shrink-0">
                  <FaCode className="text-lg" />
                </div>
                <p className="text-[#6B6B6B]">
                  {renderInfo(receiverDetails?.interests)}
                </p>
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </section>
  );
};

export default Messages;
