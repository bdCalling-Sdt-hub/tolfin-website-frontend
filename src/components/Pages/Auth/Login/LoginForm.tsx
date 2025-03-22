"use client";
import Button from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { closeModal } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { storeTokens } from "@/services/auth.services";
import { LoginFormValues } from "@/types/authTypes";
import { TError } from "@/types/error";
import { Checkbox, Form } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const LoginForm = ({
  toggleTab,
}: {
  toggleTab: (
    tab:
      | "login"
      | "register"
      | "forgotPassword"
      | "verifyEmail"
      | "resetPassword"
  ) => void;
}) => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res?.data?.attributes?.user?.role === "admin") {
        toast.error("You are admin you can't login here!");
        return;
      }
      toast.success(res.message || "Login successful!");
      storeTokens(
        res?.data?.attributes?.tokens?.accessToken,
        res?.data?.attributes?.tokens?.refreshToken
      );
      router.refresh();
      dispatch(closeModal());
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <InputComponent placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <InputComponent placeholder="Password" isPassword />
        </Form.Item>
        <div className="flex gap-4 justify-between items-center mb-4">
          <Checkbox className="text-gray-9 text-xs md:text-sm">
            Remember me
          </Checkbox>
          <h1
            onClick={() => toggleTab("forgotPassword")}
            className="text-xs md:text-sm text-gray-9 hover:underline hover:text-primary cursor-pointer"
          >
            Forgot password?
          </h1>
        </div>
        <Button type="submit" loading={isLoading} className="w-full">
          Login
        </Button>
      </Form>
      <div className="mt-4 text-center">
        <h1 className="text-sm md:text-lg text-gray-9">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => toggleTab("register")}
            className="text-primary hover:underline cursor-pointer"
          >
            Register
          </span>
        </h1>
      </div>
    </section>
  );
};

export default LoginForm;
