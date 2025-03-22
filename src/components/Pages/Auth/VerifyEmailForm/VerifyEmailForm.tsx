"use client";
import Button from "@/components/ui/ButtonComponent";
import { useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import { closeModal } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { storeTokens } from "@/services/auth.services";
import { TError } from "@/types/error";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "sonner";

const VerifyEmailForm = ({
  email,
  type,
  toggleTab,
  setEmail,
}: {
  email: string;
  type: string;
  toggleTab: (tab: "login" | "register" | "forgotPassword" | "verifyEmail" | "resetPassword") => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [oneTimeCode, setOneTimeCode] = useState<string>("");
  const verifyToken = Cookies.get("verify-token");
  const dispatch = useAppDispatch();
  const router = useRouter();
  // Handle OTP change
  const handleOtpChange = (otpValue: string) => {
    setOneTimeCode(otpValue);
  };
  // Handle form submission
  const onFinish = async () => {
    try {
      const payload = {
        email,
        token: verifyToken,
        otp: oneTimeCode,
      };
      const res = await verifyEmail(payload).unwrap();
      if (type === "register") {
        storeTokens(
          res?.data?.attributes?.result?.tokens?.accessToken,
          res?.data?.attributes?.result?.tokens?.refreshToken
        );
      }
      toast.success(res.message);
      if (type === "register") {
        dispatch(closeModal());
        router.push("/add-photos");
      } else {
        toggleTab("resetPassword");
        setEmail(email);
      }
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold text-gray-950">
        Verify Email
      </h2>
      <p className="text-gray-950">
        Please enter the 6-digit code sent to your email address.
      </p>
      <div className="flex justify-center items-center space-x-2">
        <OTPInput
          value={oneTimeCode}
          onChange={handleOtpChange}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp-container"
          inputStyle={{
            width: "100%",
            maxWidth: "6.5rem",
            height: "3rem",
            margin: "0 0.5rem",
            fontSize: "2rem",
            border: "1px solid #ccc",
            fontWeight: "bold",
            textAlign: "center",
            outline: "none",
          }}
        />
      </div>
      <div className="mt-5 text-center">
        <Button onClick={onFinish} loading={isLoading} className="w-full">
          Verify Email
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
