"use client";
import Button from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { TError } from "@/types/error";
import { Form } from "antd";
import Cookies from "js-cookie";
import { toast } from "sonner";

interface LoginFormValues {
  email: string;
}

const ForgotPasswordForm = ({
  toggleTab,
  setEmail,
  setType
}: {
  toggleTab: (
    tab:
      | "login"
      | "register"
      | "forgotPassword"
      | "verifyEmail"
      | "resetPassword"
  ) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await forgotPassword({ email: values.email }).unwrap();
      //set verify token in cookies
      Cookies.set("verify-token", res?.data?.attributes?.resetPasswordToken, {
        expires: 7,
      });
      toast.success(res.message);
      setEmail(values?.email);
      setType("forgot-password");
      toggleTab("verifyEmail");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="w-full space-y-5">
      <h2 className="text-3xl font-semibold text-gray-950">
        Forgot Password
      </h2>
      <h1 className="text-lg">Please enter your email address. You will receive a one-time password (OTP) to reset your password.</h1>
      <Form layout="vertical" onFinish={onFinish} className="space-y-5">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <InputComponent placeholder="Enter your email" />
        </Form.Item>
        <Button type="submit" loading={isLoading} className="w-full">
          Send OTP
        </Button>
      </Form>
      <h1 onClick={() => toggleTab("login")} className="hover:text-primary cursor-pointer">Back to Login</h1>
    </div>
  );
};

export default ForgotPasswordForm;
