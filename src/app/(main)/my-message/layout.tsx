import Chat from "@/components/Pages/Inbox/Chat/Chat";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-5 pt-24 xl:pt-[112px]  bg-[#F5F9FF]">
      {/* <h1 className="text-2xl md:text-3xl container  font-medium my-8">
        Chat Room
      </h1> */}
      <div className="w-full md:container grid grid-cols-1 md:grid-cols-12 py-3">
        <Chat />
        {children}
      </div>
    </div>
  );
};

export default layout;
