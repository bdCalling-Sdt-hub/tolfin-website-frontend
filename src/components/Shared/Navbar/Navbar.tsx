
// "use client";
// import React, { useState, useEffect } from "react";
// import logo from "@/assets/logo/tolfin.png";
// import userIcon from "@/assets/logo/userImage.png";
// import Image from "next/image";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { logoutUser, loggedUser } from "@/redux/features/auth/authSlice";
// import Cookies from "js-cookie";
// import { CiUser } from "react-icons/ci";
// import { useGetMyProfileQuery } from "@/redux/features/profile/profileApi";

// const navLinks = [
//   { name: "Home", href: "/" },

//   { name: "About Us", href: "/about-us" },
//   { name: "Services", href: "/our-services" },
//   { name: "Get A Quote", href:"/get-qoute" },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact", href: "/contact-us" },
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isHovering, setIsHovering] = useState(false); // State to track hover

//   const { data } = useGetMyProfileQuery({});
//   const user = data?.data.attributes;
//   const dispatch = useAppDispatch();

//   const userState = useAppSelector((state) => state.auth.user); // Get user from Redux state

//   useEffect(() => {
//     const token = Cookies.get("token");
//     const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null;
//     const refreshToken = Cookies.get("refreshToken");

//     if (token && userData && refreshToken) {
//       dispatch(loggedUser({ user: userData, token, refreshToken }));
//     } else {
//       dispatch(logoutUser()); // Ensure user is logged out when there are no tokens or user data
//     }
//   }, [dispatch]);

//   const handleLogout = () => {
//     dispatch(logoutUser()); // Dispatch the action to clear Redux state
//     Cookies.remove("token");  // Clear cookies
//     Cookies.remove("user");
//     Cookies.remove("refreshToken");
//   };

//   return (
//     <header className={`w-full h-[80px] fixed top-0 z-50 transition-all duration-300 `}>
//       <nav className="md:w-full md:container mx-auto  flex justify-between items-center h-full ">
//         {/* Logo */}
//         <Link href="/">
//           <Image src={logo} alt="logo" width={130} height={70} className="rounded-md bg-[#1540477D] p-2 " />
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-5 md:gap-8 bg-[#1540477D] p-5 rounded-lg">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link href={link.href} className="text-white hover:text-gray-300">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* User Section */}
//         <div className="hidden md:block relative">
//           {userState ? ( // Check if the user state is set from Redux
//             <div
//               className="relative"
//               onMouseEnter={() => setIsHovering(true)} // Show on hover
//               onMouseLeave={() => setIsHovering(false)} // Hide when mouse leaves
//             >
//               <button>
//                 <Image
//                   src={user?.profileImage ? `${"ImageBaseUrl"}${user?.profileImage}` : userIcon}
//                   alt="User"
//                   width={40}
//                   height={40}
//                   className="w-[40px] h-[40px] rounded-full cursor-pointer"
//                 />
//               </button>
//               {isHovering && (  
//                 <div className="absolute right-0  w-48 bg-white shadow-lg rounded-lg py-2">
//                   <Link href="/my-profile">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
//                   </Link>
//                   <Link href="/my-jobs">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Jobs</p>
//                   </Link>
//                   <Link href="/my-saveJobs">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save Jobs</p>
//                   </Link>
//                   <Link href="/faq">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</p>
//                   </Link>
//                   <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link href="/register">
//               <button className="px-5 py-2 bg-[#1540477D] h-[70px] text-white rounded-lg flex items-center">Sign In <CiUser /></button>
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#1540474D] shadow-lg fixed top-[105px] left-0 w-full z-40">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile User Section */}
//           <div className="flex justify-center py-4">
//             {userState ? (
//               <div className="flex flex-col items-center">
//                 <Image
//                   src={user?.profileImage ? `${"ImageBaseUrl"}${user?.profileImage}` : userIcon}
//                   alt="User"
//                   width={40}
//                   height={40}
//                   className="rounded-full mb-2"
//                 />
//                 <Link href="/my-profile">
//                   <button onClick={() => setIsMobileMenuOpen(false)} className="w-full px-5 py-2 bg-gray-200 rounded-lg mb-2">
//                     Profile
//                   </button>
//                 </Link>
//                 <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="w-full px-5 py-2 bg-red-500 text-white rounded-lg">
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link href="/register">
//                 <button onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-2 bg-primary text-white rounded-lg">Sign In</button>
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;










"use client";
import React, { useState, useEffect } from "react";
import logo from "@/assets/logo/tolfin.png";
import userIcon from "@/assets/logo/userImage.png";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser, loggedUser } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { CiUser } from "react-icons/ci";
import { useGetMyProfileQuery } from "@/redux/features/profile/profileApi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/our-services" },
  { name: "Get A Quote", href: "/get-qoute" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Active link state
  const [isClient, setIsClient] = useState(false); // To ensure client-side rendering

  const { data } = useGetMyProfileQuery({});
  const user = data?.data.attributes;
  const dispatch = useAppDispatch();

  const userState = useAppSelector((state) => state.auth.user); // Get user from Redux state

  // Ensure that useEffect runs only on the client side
  useEffect(() => {
    setIsClient(true); // This ensures the component only runs client-side code
  }, []);

  useEffect(() => {
    if (isClient) {
      const token = Cookies.get("token");
      const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null;
      const refreshToken = Cookies.get("refreshToken");

      if (token && userData && refreshToken) {
        dispatch(loggedUser({ user: userData, token, refreshToken }));
      } else {
        dispatch(logoutUser()); // Ensure user is logged out when there are no tokens or user data
      }
    }
  }, [dispatch, isClient]);

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the action to clear Redux state
    Cookies.remove("token");  // Clear cookies
    Cookies.remove("user");
    Cookies.remove("refreshToken");
  };

  // State to track hover
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className={`w-full h-[90px] fixed top-0 z-50 transition-all duration-300`}>
      <nav className="md:w-full md:container mx-auto flex justify-between items-center h-full ">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={130} height={70} className="rounded-md bg-[#1540477D] border  border-[#627F84]  p-2 " />
        </Link>

        {/* Desktop Navigation */}
        <ul className=" hidden md:flex items-center gap-7 md:gap-8 bg-[#1540477D] border  border-[#627F84]   px-12 rounded-lg ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className={`text-white ${activeLink === link.href ? 'bg-[#627F84] w-full py-4 px-2 block text-center  border-b-2` text-white' : 'hover:text-gray-300' }`}
                onClick={() => setActiveLink(link.href)} // Set the active link
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Section */}
        <div className="hidden md:block relative">
          {userState ? ( // Check if the user state is set from Redux
            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)} // Show on hover
              onMouseLeave={() => setIsHovering(false)} // Hide when mouse leaves
            >
              <button>
                <Image
                  src={user?.profileImage ? `${"ImageBaseUrl"}${user?.profileImage}` : userIcon}
                  alt="User"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-full cursor-pointer"
                />
              </button>
              {isHovering && (  
                <div className="absolute right-0  w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link href="/my-profile">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
                  </Link>
                  <Link href="/my-jobs">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Jobs</p>
                  </Link>
                  <Link href="/my-saveJobs">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save Jobs</p>
                  </Link>
                  <Link href="/faq">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</p>
                  </Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/register">
              <button className="px-5 py-2 bg-[#1540477D] border  border-[#627F84] h-[60px] text-white  rounded-lg flex items-center">Sign In <CiUser /></button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1540474D] shadow-lg fixed top-[105px] left-0 w-full z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={() => { setIsMobileMenuOpen(false); setActiveLink(link.href); }} 
                  className={`hover:text-primary ${activeLink === link.href ? 'bg-[#00D1C8]' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          

          {/* Mobile User Section */}
          <div className="flex justify-center py-4">
            {userState ? (
              <div className="flex flex-col items-center">
                <Image
                  src={user?.profileImage ? `${"ImageBaseUrl"}${user?.profileImage}` : userIcon}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full mb-2"
                />
                <Link href="/my-profile">
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-full px-5 py-2 bg-gray-200 rounded-lg mb-2">
                    Profile
                  </button>
                </Link>
                <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="w-full px-5 py-2 bg-red-500 text-white rounded-lg">
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/register">
                <button onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-2 bg-primary text-white rounded-lg">Sign In</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;



