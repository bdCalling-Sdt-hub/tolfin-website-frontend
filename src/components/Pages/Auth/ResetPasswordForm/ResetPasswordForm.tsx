"use client";
import Button from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { TError } from "@/types/error";
import { Form } from "antd";
import { toast } from "sonner";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPasswordForm = ({
  email,
  toggleTab,
}: {
  email: string;
  toggleTab: (
    tab:
      | "login"
      | "register"
      | "forgotPassword"
      | "verifyEmail"
      | "resetPassword"
  ) => void;
}) => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onFinish = async (values: ResetPasswordFormValues) => {
    try {
      const res = await resetPassword({
        email,
        password: values.password,
      }).unwrap();
      toast.success(res.message);
      toggleTab("login");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-950 mt-4">
        Reset Your Password
      </h2>
      <p className="text-gray-950">
        Enter your new password to reset your account password.
      </p>
      <Form layout="vertical" onFinish={onFinish} className="space-y-5">
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter a new password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters",
            },
          ]}
          hasFeedback
        >
          <InputComponent isPassword placeholder="New Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your new password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
          hasFeedback
        >
          <InputComponent isPassword placeholder="Confirm New Password" />
        </Form.Item>
        <Button loading={isLoading} type="submit">
          Reset Password
        </Button>
      </Form>
      <h1 onClick={() => toggleTab("login")} className="hover:text-primary cursor-pointer">Back to Login</h1>
    </div>
  );
};

export default ResetPasswordForm;
