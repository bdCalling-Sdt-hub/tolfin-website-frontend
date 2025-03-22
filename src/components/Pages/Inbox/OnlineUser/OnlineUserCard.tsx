import Image from "next/image";
import { IOnlineUser } from "./OnlineUser";
const OnlineUserCard = ({ user }: { user: IOnlineUser }) => {
  return (
    <div
      className={`w-full ${
        user?.id === 1 && "bg-[#F6F6FE]"
      } px-4 py-3 flex  rounded-xl items-center gap-3`}
    >
      <Image
        src="https://i.ibb.co.com/DwC7Fcq/girls.jpg"
        alt="user"
        width={60}
        height={60}
        className="w-16 h-16 rounded-xl flex-shrink-0"
      />
      <div className="w-full space-y-2">
        <h1 className="text-lg font-medium">{user?.fullName}</h1>
        <p className="text-[#999999] ">{user?.location}</p>
      </div>
    </div>
  );
};

export default OnlineUserCard;
