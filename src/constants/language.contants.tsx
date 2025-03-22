import { FaFlagUsa, FaFlag, FaGlobe } from "react-icons/fa"; // Example icons

export const supportedLanguages = [
  { title: "English", name: "en", icon: <FaFlagUsa /> },
  { title: "French", name: "fr", icon: <FaFlag /> },
  { title: "Arabic", name: "ar", icon: <FaGlobe /> }, // Example using react-icons
  { title: "New Language", name: "nl", icon: <FaGlobe /> }, // Add the new language
];