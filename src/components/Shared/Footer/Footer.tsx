import Image from "next/image";
import logo from "@/assets/logo/dating-logo.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#d9e6f2] px-5 py-16">
      <div className="w-full md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Link href="/">
            <div className="w-36 md:w-48 h-24 relative ">
              <Image
                src={logo}
                alt="1PLUS1 Logo"
                layout="fill"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-700">
            Join our Christian dating platform built on honesty and respect for meaningful
            relationships. Here real people make real connections! Your next great connection starts
            here!
          </p>
        </div>

        {/* User Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">User Navigation</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <Link href="/singles" className="hover:underline">
                Singles
              </Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:underline">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/subscriptions" className="hover:underline">
                Subscriptions
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-condition" className="hover:underline">
                Terms of Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-700 space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="size-5 mr-2" />
              <Link href="mailto:info@1plus1.com" className="hover:underline">
                info@1plus1dating.de
              </Link>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="size-5 mr-2" />
              <Link href="tel:+2114918024" className="hover:underline">
                +21 14 918 024
              </Link>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="size-5 mr-2" />
              <p>Frankfurt – Germany</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
