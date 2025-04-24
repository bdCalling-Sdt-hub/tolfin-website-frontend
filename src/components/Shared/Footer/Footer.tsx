import Image from "next/image";
import logo from "@/assets/logo/tolfin.png"; // Replace with your logo file
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import footer from "@/assets/logo/footer.png"; 
import yeollow from "@/assets/hero/yeollow.png";

const Footer = () => {
  return (
    <footer className="w-full  text-white px-5 py-16  " style={{ backgroundImage: `url(${footer.src})` }}>
      <div className="w-full md:container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8  ">
        {/* Logo and Description */}
        <div>
          <Link href="/">
            <div className=" ">
              <Image
                src={logo}
                alt="Tolfin Logo"
                width={230} 
                height={80}
                
                className="object-contain p-2 rounded-md"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm">
            Tolfin Global Limited was founded to make life easier and safer for those on the move. With 5+ years of industry experience, we’ve built a strong network and skilled team, committed to advancing technology and safety.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/about-us" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/get-qoute" className="hover:underline">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/our-services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/Queston" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms-of-condition" className="hover:underline">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <Link href="mailto:info@tolfin.com" className="hover:underline">
                info@tolfin.com
              </Link>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <Link href="tel:+21481411870" className="hover:underline">
                +214 814 118 70
              </Link>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <p>Dhaka, Bangladesh</p>
            </li>
          </ul>
        </div>
        <div className="w-36 md:w-48 h-24 relative">
          <Image
            src={yeollow}
            alt="Tolfin Logo"
            width={400}
           
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
