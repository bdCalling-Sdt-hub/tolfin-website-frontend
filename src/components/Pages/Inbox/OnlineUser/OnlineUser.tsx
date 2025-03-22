import OnlineUserCard from "./OnlineUserCard";

export interface IOnlineUser {
  id: number;
  fullName: string;
  image: string;
  location: string;
}
const OnlineUser = () => {
  const onlineUsers = [
    {
      id: 1,
      fullName: "Alice Johnson",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      location: "Los Angeles, USA",
    },
    {
      id: 2,
      fullName: "Michael Smith",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      location: "London, UK",
    },
    {
      id: 3,
      fullName: "Sophia Martinez",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      location: "Toronto, Canada",
    },
    {
      id: 4,
      fullName: "Daniel Kim",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      location: "Seoul, South Korea",
    },
    {
      id: 5,
      fullName: "Emma Williams",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      location: "Paris, France",
    },
    {
      id: 6,
      fullName: "James Anderson",
      image: "https://i.ibb.co.com/DwC7Fcq/girls.jpg",
      location: "Sydney, Australia",
    },
  ];

  return (
    <div className="w-full h-[42vh] overflow-y-scroll bg-white p-4 ">
      <div className="pb-5 flex items-center gap-2">
        <h1 className="text-xl font-medium text-[#6B6B6B]">Online Members</h1>
        <div className="size-8 bg-green-500 rounded-full flex justify-center items-center">
          <h1 className="font-semibold text-white">6</h1>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        {onlineUsers.map((user: IOnlineUser) => (
          <OnlineUserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default OnlineUser;
