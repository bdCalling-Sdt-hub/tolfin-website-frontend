"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { openModal } from "@/redux/features/auth/authSlice";
import { parse } from "cookie"; // Importing the cookie parser package

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = () => {
      // Get cookies from document
      const cookies = parse(document.cookie);

      const accessToken = cookies?.accessToken || null;
      const refreshToken = cookies?.refreshToken || null;

      if (!accessToken || !refreshToken) {
        dispatch(openModal()); // Open modal if not authenticated
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  // If authentication fails, the modal will be triggered, otherwise, children are shown
  return (
    <>
      <div>
        {/* This will show only if both tokens exist */}
        {children}
      </div>
    </>
  );
};

export default ProtectedRoute;
