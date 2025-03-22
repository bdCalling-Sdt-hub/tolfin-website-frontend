
import Navbar from "@/components/Shared/Navbar/Navbar";
import ShowFooter from "@/components/Shared/ShowFooter/ShowFooter";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <ShowFooter />
    </main>
  );
};

export default MainLayout;
