// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import logo from "@/assets/logo/dating-logo.png";
// import Image from "next/image";
// import Link from "next/link";
// import { Drawer, Dropdown, notification } from "antd";
// import { MenuOutlined } from "@ant-design/icons";
// import { RxPerson } from "react-icons/rx";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { TbMessageDots } from "react-icons/tb";
// import { BsFlower2 } from "react-icons/bs";
// import { FiCreditCard } from "react-icons/fi";
// import { LuLogOut } from "react-icons/lu";
// import Cookies from "js-cookie";
// import { MenuProps } from "antd/lib";
// import usFlag from "@/assets/navbar/us.png";
// import deFlag from "@/assets/navbar/german.png";
// import { FaCheck } from "react-icons/fa";
// import useUser from "@/hooks/useUser";
// import { imageBaseUrl } from "@/config/config";
// import { usePathname, useRouter } from "next/navigation";
// import { useSocket } from "@/context/socketProvider";
// import { useSetLatestLocationMutation } from "@/redux/features/profile/profileApi";
// import ActiveNavLink from "./ActiveNavLink";
// import { IMessage, MessageType } from "@/types/messagesType";
// import LoginForm from "@/components/Pages/Auth/Login/LoginForm";
// import RegisterForm from "@/components/Pages/Auth/Register/RegisterForm";
// import ForgotPasswordForm from "@/components/Pages/Auth/ForgotPasswordForm/ForgotPasswordForm";
// import VerifyEmailForm from "@/components/Pages/Auth/VerifyEmailForm/VerifyEmailForm";
// import ResetPasswordForm from "@/components/Pages/Auth/ResetPasswordForm/ResetPasswordForm";
// //framer motion
// import { motion, AnimatePresence } from "framer-motion";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { closeModal, openModal } from "@/redux/features/auth/authSlice";
// import { IChat } from "@/types/chatTypes";
// import toast from "react-hot-toast";

// interface ILocationData {
//   latitude: number;
//   longitude: number;
//   address: string;
// }
// const Navbar = () => {
//   const [email, setEmail] = useState<string>("");
//   const [type, setType] = useState<string>("");
//   const isModalOpen = useAppSelector((state) => state.auth.isModalOpen);
//   const dispatch = useAppDispatch();
//   const [activeTab, setActiveTab] = useState<
//     "login" | "register" | "forgotPassword" | "verifyEmail" | "resetPassword"
//   >("login");
//   const handleOpenModal = () => {
//     dispatch(openModal());
//   };
//   const handleCloseModal = () => {
//     dispatch(closeModal());
//   };
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { socket } = useSocket();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [api, contextHolder] = notification.useNotification();

//   const [currentLanguage, setCurrentLanguage] = useState<string | null>("en");
//   const router = useRouter();
//   const user = useUser();
//   const currentPath = usePathname();
//   const activePath = currentPath == "/";
//   const defaultDesktopNavLinks = [
//     { name: "Home", href: "/" },
//     { name: "Singles", href: "/singles" },
//     { name: "Success Stories", href: "/success-stories" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];
//   const loggedDesktopNavLinks = [
//     { name: "Home", href: "/" },
//     { name: "Singles", href: "/singles" },
//     { name: "Profile", href: "/my-profile" },
//     { name: "Success Stories", href: "/success-stories" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];
//   const desktopNavLinks = user ? loggedDesktopNavLinks : defaultDesktopNavLinks;

//   const defaultNavLinks = [
//     { name: "Home", href: "/" },
//     { name: "Singles", href: "/singles" },
//     { name: "Success Stories", href: "/success-stories" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];
//   const loggedNavLinks = [
//     { name: "Home", href: "/" },
//     { name: "Singles", href: "/singles" },
//     { name: "My Profile", href: "/my-profile" },
//     { name: "My Messages", href: "my-message" },
//     { name: " Who Has Sent Me Flowers", href: "/flower" },
//     { name: "My Subscription", href: "/my-subscription" },
//     { name: "Success Stories", href: "/success-stories" },
//     { name: "Contact Us", href: "/contact-us" },
//   ];

//   const mobileNavLinks = user ? loggedNavLinks : defaultNavLinks;
//   //set location api
//   const [setLocation] = useSetLatestLocationMutation();

//   //socket connection
//   useEffect(() => {
//     if (socket && user?.id) {
//       socket.emit("user/connect", { userId: user.id });

//       const messageEvent = "new-message";
//       const handleNewMessage = (newMessageData: { data: IMessage }) => {
//         const newMessage = newMessageData?.data;
//         const senderProfileImage = newMessage?.senderId?.profileImage?.imageUrl;
//         console.log(newMessageData);

//         if (!currentPath.includes("/my-message")) {
//           toast.custom((t) => (
//             <div
//               className={`${
//                 t.visible ? "animate-enter" : "animate-leave"
//               } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
//             >
//               <div className="flex-1 w-0 p-4">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 pt-0.5">
//                     <Image
//                       className="h-10 w-10 rounded-full"
//                       width={40}
//                       height={40}
//                       src={`${imageBaseUrl}${senderProfileImage}`}
//                       alt="image"
//                     />
//                   </div>
//                   <div className="ml-3 flex-1">
//                     <p className="text-sm font-medium text-gray-900">
//                       {newMessage?.senderId?.fullName}
//                     </p>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {newMessage?.content?.messageType === MessageType.TEXT
//                         ? newMessage?.content?.text
//                         : newMessage?.content?.messageType === MessageType.IMAGE
//                         ? `sent ${
//                             newMessage?.content?.fileUrls?.length === 1
//                               ? "an image"
//                               : "images"
//                           }`
//                         : newMessage?.content?.messageType === MessageType.MIXED
//                         ? "sent a mixed message (text + media)"
//                         : newMessage?.content?.messageType === MessageType.AUDIO
//                         ? "sent an audio message"
//                         : newMessage?.content?.messageType === MessageType.VIDEO
//                         ? "sent a video"
//                         : newMessage?.content?.messageType ===
//                           MessageType.DOCUMENT
//                         ? "sent a document"
//                         : "sent a message"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex border-l border-gray-200">
//                 <button
//                   onClick={() => {
//                     toast.dismiss(t.id);
//                     router.push(`/my-message/${newMessage?.chatId}`);
//                   }}
//                   className="px-5 py-2 bg-primary rounded"
//                 >
//                   View
//                 </button>
//                 <button
//                   onClick={() => toast.dismiss(t.id)}
//                   className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           ));
//         }
//       };

//       const handleNewChat = (newChatData: { data: IChat }) => {
//         const newChat = newChatData?.data;
//         if (newChat) {
//           router.refresh();
//         }
//       };

//       socket.on(messageEvent, handleNewMessage);
//       socket.on("new-chat", handleNewChat);

//       return () => {
//         socket.emit("user/disconnect", { userId: user.id });
//         socket.off(messageEvent, handleNewMessage);
//         socket.off("new-chat", handleNewChat);
//       };
//     }
//   }, [api, currentPath, router, socket, user]);

//   const getAddressFromCoordinates = async (
//     latitude: number,
//     longitude: number
//   ) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
//       );
//       const data = await response.json();
//       if (data.status === "OK") {
//         return data.results[0]?.formatted_address || "Address not found";
//       } else {
//         console.log("Error fetching address:", data.status);
//         return;
//       }
//     } catch (error) {
//       console.log("Error fetching address:", error);
//       return;
//     }
//   };



//   useEffect(() => {
//     const handleLocationPermission = () => {
//       if (!user) {
//         return;
//       }
//       if (navigator.geolocation) {
//         navigator.geolocation.watchPosition(
//           async (position) => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             const address = await getAddressFromCoordinates(
//               latitude,
//               longitude
//             );
//             if (
//               user?.location &&
//               user?.location?.latitude === latitude &&
//               user?.location?.longitude === longitude &&
//               user?.address === address
//             ) {
//               return;
//             }
//             //if user.location is null then set location
//             const locationData: ILocationData = {
//               latitude: 0,
//               longitude: 0,
//               address: "",
//             };
//             if (latitude) {
//               locationData.latitude = latitude;
//             }
//             if (longitude) {
//               locationData.longitude = longitude;
//             }
//             if (address) {
//               locationData.address = address;
//             }
//             await setLocation(locationData).unwrap();
//           },
//           (error) => {
//             console.log("Error getting location:", error);
//           },
//           {
//             enableHighAccuracy: true, // More precise location
//             maximumAge: 5000, // Use cached location up to 5 sec old
//             timeout: 10000, // 10 sec timeout
//           }
//         );
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
//     };

//     handleLocationPermission();
//   }, [user, setLocation]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       const currentDropdownRef = dropdownRef.current;
//       if (
//         currentDropdownRef &&
//         !currentDropdownRef.contains(e.target as Node | null)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     const storedLanguage = Cookies.get("currentLanguage");
//     if (storedLanguage) {
//       setCurrentLanguage(storedLanguage);
//     }
//   }, []);

//   // Switch Language Function
//   const switchLanguage = (lang: string) => {
//     // Store selected language in cookies
//     Cookies.set("currentLanguage", lang, { expires: 30 });

//     // Correctly set the Google Translate cookie (googtrans)
//     const googleTransValue = `/en/${lang}`;

//     // Remove any existing "googtrans" cookies before setting a new one
//     document.cookie =
//       "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     document.cookie =
//       "googtrans=; domain=.1plus1dating.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Replace with your actual domain

//     // Now, set the new "googtrans" cookie
//     document.cookie = `googtrans=${googleTransValue}; path=/; max-age=${
//       30 * 24 * 60 * 60
//     }`;
//     document.cookie = `googtrans=${googleTransValue}; domain=.1plus1dating.com; path=/; max-age=${
//       30 * 24 * 60 * 60
//     };`;

//     // Update state
//     setCurrentLanguage(lang);

//     // Reload the page to apply the translation
//     window.location.reload();
//   };

//   const items: MenuProps["items"] = [
//     {
//       key: "1",
//       label: (
//         <button
//           onClick={() => switchLanguage("en")}
//           className="flex items-center gap-2"
//         >
//           English{" "}
//           {currentLanguage === "en" && <FaCheck className="text-gray-600" />}
//         </button>
//       ),
//     },
//     {
//       key: "2",
//       label: (
//         <button
//           onClick={() => switchLanguage("de")}
//           className="flex items-center gap-2"
//         >
//           German{" "}
//           {currentLanguage === "de" && <FaCheck className="text-gray-600" />}
//         </button>
//       ),
//     },
//   ];

//   const handleLogout = () => {
//     //remove accessToken and refreshToken from cookies
//     document.cookie =
//       "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     document.cookie =
//       "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     window.location.reload();
//     ///reload
//     router.push("/");
//   };

//   const toggleTab = (
//     tab:
//       | "login"
//       | "register"
//       | "forgotPassword"
//       | "verifyEmail"
//       | "resetPassword"
//   ) => {
//     setActiveTab(tab);
//   };
//   //handle outside click to close modal

//   return (
//     <>
//       <header
//         className={`w-full fixed top-0 z-50 transition-all duration-300 ${
//           activePath
//             ? isScrolled
//               ? "bg-white/70 backdrop-blur-md"
//               : "bg-transparent"
//             : "bg-white/70 backdrop-blur-md"
//         }`}
//       >
//         <nav className="w-full md:container flex justify-between items-center px-5 md:px-3 py-3">
//           {/* Logo */}
//           <Link href="/">
//             <div className="w-28 h-16 md:w-48 md:h-24 mx-auto relative">
//               <Image
//                 src={logo}
//                 alt="1PLUS1 Logo"
//                 layout="fill"
//                 className="object-contain"
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className={`hidden lg:flex items-center gap-5 md:gap-8`}>
//             {desktopNavLinks?.map((value, index) => (
//               <ActiveNavLink
//                 key={index}
//                 title={value?.name}
//                 link={value?.href}
//               />
//             ))}
//           </ul>
//           <div className="flex items-center gap-5">
//             <div className="hidden lg:flex items-center gap-5 md:gap-20">
//               {user ? (
//                 <div className="relative" ref={dropdownRef}>
//                   <div
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     className="flex items-center gap-2 "
//                   >
//                     {user?.profileImage?.imageUrl && (
//                       <Image
//                         src={`${imageBaseUrl}${user?.profileImage?.imageUrl}`}
//                         alt="logo"
//                         width={50}
//                         height={50}
//                         className="w-[55px] h-[55px] rounded-full cursor-pointer bg-transparent"
//                       />
//                     )}

//                     <div className="-ml-2 mt-2 cursor-pointer">
//                       {isDropdownOpen ? (
//                         <MdOutlineKeyboardArrowUp
//                           className={`size-10 ${
//                             isScrolled ? "text-gray-400" : "text-gray-500"
//                           } transition-transform duration-300`}
//                         />
//                       ) : (
//                         <MdOutlineKeyboardArrowDown
//                           className={`size-10 ${
//                             isScrolled ? "text-gray-400" : "text-gray-500"
//                           } transition-transform duration-300`}
//                         />
//                       )}
//                     </div>
//                   </div>
//                   {isDropdownOpen && (
//                     <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 opacity-100 z-[9999]">
//                       <Link
//                         href="/my-profile"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         <div className="px-4 py-4 bg-blue-900 text-white flex items-center gap-3">
//                           <FaRegCircleUser className="text-lg size-7" />{" "}
//                           <span>My Profile</span>
//                         </div>
//                       </Link>
//                       <Link
//                         href="/my-message"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         <div className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer">
//                           <TbMessageDots className="mr-2 size-7" />{" "}
//                           <span className="text-sm">My Messages</span>
//                         </div>
//                       </Link>
//                       <Link
//                         href="/flowers"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         <div className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer">
//                           <BsFlower2 className="mr-2 size-6" />
//                           <span className="text-sm">
//                             Who Has Sent Me Flowers{" "}
//                           </span>
//                         </div>
//                       </Link>
//                       <Link
//                         href="/my-subscription"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         <div className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer">
//                           <FiCreditCard className="mr-2 size-6" />{" "}
//                           <span className="text-sm">My Subscription</span>
//                         </div>
//                       </Link>
//                       <div
//                         onClick={handleLogout}
//                         className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer"
//                       >
//                         <LuLogOut className="mr-2 size-6" />
//                         <span className="text-sm">Logout</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button
//                   className="px-5 py-2  bg-primary font-[500px] hover:bg-opacity-90 text-white transition-all duration-500 rounded w-full flex items-center gap-2"
//                   onClick={handleOpenModal}
//                 >
//                   <RxPerson className="size-5" />
//                   <span> Login / Register</span>
//                 </button>
//               )}
//             </div>
//             <Dropdown menu={{ items }} placement="topRight" arrow>
//               {currentLanguage == "en" ? (
//                 <Image
//                   src={usFlag}
//                   alt="language"
//                   width={40}
//                   height={40}
//                   className="cursor-pointer"
//                 />
//               ) : (
//                 <Image
//                   src={deFlag}
//                   alt="language"
//                   width={40}
//                   height={40}
//                   className="cursor-pointer"
//                 />
//               )}
//             </Dropdown>
//           </div>

//           {/* Mobile Menu */}
//           <button
//             className="lg:hidden text-2xl"
//             onClick={() => setIsDrawerOpen(true)}
//           >
//             <MenuOutlined />
//           </button>

//           {/* Ant Design Drawer */}
//           <Drawer
//             title={
//               <Link href="/">
//                 <Image src={logo} alt="logo" width={150} height={75} />
//               </Link>
//             }
//             placement="right"
//             onClose={() => setIsDrawerOpen(false)}
//             open={isDrawerOpen}
//           >
//             <ul className="flex flex-col gap-5">
//               {mobileNavLinks?.map((value, index) => (
//                 <div key={index} onClick={() => setIsDrawerOpen(false)}>
//                   <ActiveNavLink title={value?.name} link={value?.href} />
//                 </div>
//               ))}
//               {user ? (
//                 <div
//                   onClick={handleLogout}
//                   className="flex items-center px-4 py-3 rounded-xl text-white text-center justify-center bg-primary cursor-pointer"
//                 >
//                   <LuLogOut className="mr-2 size-6" />
//                   <span className="text-sm">Logout</span>
//                 </div>
//               ) : (
//                 <Link href="/register">
//                   <button
//                     className="px-5 py-2 bg-primary text-white rounded-lg w-full"
//                     onClick={() => setIsDrawerOpen(false)}
//                   >
//                     Sign Up
//                   </button>
//                 </Link>
//               )}
//             </ul>
//           </Drawer>
//         </nav>
//         {contextHolder}
//       </header>
//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={(e) => {
//               if (e.target === e.currentTarget) {
//                 handleCloseModal();
//               }
//             }}
//             className="fixed w-full h-screen bg-black bg-opacity-60 flex p-5 items-center justify-center z-50 top-0"
//           >
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ duration: 0.5, type: "spring" }}
//               className="w-full max-w-xl max-h-[600px] overflow-y-auto bg-white rounded-lg"
//             >
//               <motion.div className="flex justify-between items-center gap-1">
//                 <button
//                   className={`w-full  font-semibold  px-4 py-5 rounded-tl-lg ${
//                     activeTab === "login"
//                       ? "bg-gray-100 text-primary"
//                       : "bg-transparent text-gray-950"
//                   }`}
//                   onClick={() => toggleTab("login")}
//                 >
//                   Login
//                 </button>
//                 <button
//                   className={`w-full  font-semibold  px-4 py-5 rounded-tr-lg ${
//                     activeTab === "register"
//                       ? "bg-gray-100 text-primary"
//                       : "bg-transparent text-gray-950"
//                   }`}
//                   onClick={() => toggleTab("register")}
//                 >
//                   Register
//                 </button>
//               </motion.div>
//               <motion.div className="w-full px-10 pt-8 pb-12">
//                 {activeTab === "login" ? (
//                   <LoginForm toggleTab={toggleTab} />
//                 ) : activeTab === "register" ? (
//                   <RegisterForm
//                     setEmail={setEmail}
//                     setType={setType}
//                     toggleTab={toggleTab}
//                   />
//                 ) : activeTab === "forgotPassword" ? (
//                   <ForgotPasswordForm
//                     toggleTab={toggleTab}
//                     setEmail={setEmail}
//                     setType={setType}
//                   />
//                 ) : activeTab === "verifyEmail" ? (
//                   <VerifyEmailForm
//                     email={email}
//                     type={type}
//                     toggleTab={toggleTab}
//                     setEmail={setEmail}
//                   />
//                 ) : activeTab === "resetPassword" ? (
//                   <ResetPasswordForm email={email} toggleTab={toggleTab} />
//                 ) : (
//                   ""
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



"use client"
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import logo from "@/assets/logo/tolfin.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full  fixed  top-0 z-50 transition-all duration-300 ${isScrolled ? " " : " "
        }`}
    >
      <nav className="w-full  container  flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <div className="w-[10%] h-16 rounded-md  bg-[#627F84]">
          <Link href="/">
            <div className="w-20 h-16   mx-auto relative">
              <Image
                src={logo} // replace with the actual path
                alt="Logo"
                layout="fill"
                className="object-contain "
              />
            </div>
          </Link>
        </div>

        <div className=" h-16  bg-[#1540474D]  rounded-lg flex items-center justify-between px-10">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/quote">Get A Quote</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Sign In Dropdown */}
        <div className="flex items-center gap-5 ">
          <button className="bg-[#1540474D] w-30 h-16 px-5 py-2   text-white rounded-lg">
            <div className="flex"> Sign In<FaUserAlt className="mr-1" /></div>
          </button>

          {/* Dropdown (for logged-in users)
          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              {isDropdownOpen ? (
                <MdOutlineKeyboardArrowUp className="text-gray-500" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-gray-500" />
              )}
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <Link href="/profile">
                  <div className="px-4 py-2 hover:bg-gray-100">My Profile</div>
                </Link>
                <Link href="/messages">
                  <div className="px-4 py-2 hover:bg-gray-100">My Messages</div>
                </Link>
                <Link href="/subscription">
                  <div className="px-4 py-2 hover:bg-gray-100">My Subscription</div>
                </Link>
                <div className="px-4 py-2 hover:bg-gray-100">Logout</div>
              </div>
            )}
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

