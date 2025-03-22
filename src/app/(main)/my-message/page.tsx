import { Metadata } from "next";
import chatRoom from "@/assets/chat/chatroom.png";
import Image from "next/image";
export const metadata: Metadata = {
  title: "My Message | 1Plus1 Dating website",
  description: "My Message page",
  keywords: ["my message", "page", "example"],
};
const page = () => {
  return (
    <div className="w-full hidden xl:flex col-span-full md:col-span-9 bg-white  justify-center items-center">
      <Image src={chatRoom} alt="chatRoom" width={500} height={500} />
    </div>
  );
};

export default page;
