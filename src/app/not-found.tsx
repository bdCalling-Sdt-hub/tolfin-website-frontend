import notfoundImage from "@/assets/404/not-found.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "404 Not Found",
  keywords: ["404", "page", "example"],
};
const NotFound = () => {
  return (
    <section className="w-full flex flex-col gap-5  justify-center items-center h-screen ">
      <Image src={notfoundImage} alt="not found" width={500} height={500} />
      <Link href="/">
        <button className="px-8 py-2.5 bg-primary text-white rounded-lg">
          Go to Home
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
