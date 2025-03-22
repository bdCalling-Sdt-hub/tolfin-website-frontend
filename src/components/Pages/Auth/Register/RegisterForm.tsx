"use client";
import Button from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { RegisterFormValues } from "@/types/authTypes";
import { TError } from "@/types/error";
import { Checkbox, DatePicker, Form, Select } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = ({
  setEmail,
  setType,
  toggleTab,
}: {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  toggleTab: (
    tab:
      | "login"
      | "register"
      | "forgotPassword"
      | "verifyEmail"
      | "resetPassword"
  ) => void;
}) => {
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [form] = Form.useForm(); // Add form instance for validation

  const onFinish = async (values: RegisterFormValues) => {
    // Destructure confirmPassword from values (we won't send it to the backend)
    const { confirmPassword, ...registrationData } = values;
    registrationData.dateOfBirth = dateOfBirth;
    registrationData.role = "user";
    if (registrationData.password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await registerUser(registrationData).unwrap();
      // Set verify token in cookies
      Cookies.set("verify-token", res?.data?.attributes?.verificationToken, {
        expires: 7,
      });
      setEmail(registrationData?.email);
      setType("register");
      toast.success(res.message);
      toggleTab("verifyEmail");
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <Form
        form={form} // Pass the form instance
        layout="vertical"
        onFinish={onFinish}
        className="w-full grid grid-cols-2 gap-3"
      >
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
          className="col-span-full md:col-span-1"
        >
          <InputComponent placeholder="Full Name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
           className="col-span-full md:col-span-1"
        >
          <InputComponent placeholder="Email" />
        </Form.Item>

        {/* Gender */}
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select gender",
            },
          ]}
           className="col-span-full md:col-span-1"
        >
          <Select
            size="large"
            showSearch
            placeholder="Gender"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toString()
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
        </Form.Item>

        {/* Marital Status */}
        <Form.Item
          label="Marital Status"
          name="maritalStatus"
          rules={[{ required: true, message: "Please select marital status" }]}
           className="col-span-full md:col-span-1"
        >
          <Select
            size="large"
            showSearch
            placeholder="Marital Status"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Single", label: "Single" },
              { value: "Divorced", label: "Divorced" },
              { value: "Widowed", label: "Widowed" },
            ]}
          />
        </Form.Item>

        {/* Date of Birth */}
        <Form.Item
          label="Date of Birth"
         className="col-span-full md:col-span-"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please select date of birth",
            },
          ]}
        >
          <DatePicker
            size="large"
            onChange={(date, dateString) =>
              setDateOfBirth(dateString ? dateString.toString() : "")
            }
            className="w-full"
            placeholder="Date of Birth"
          />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          name="password"
           className="col-span-full md:col-span-1"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 8, message: "Password must be at least 8 characters" },
            {
              validator: (_, value) => {
                // At least one uppercase letter
                if (!/[A-Z]/.test(value)) {
                  return Promise.reject(
                    new Error(
                      "Password must contain at least one uppercase letter!"
                    )
                  );
                }
                // At least one lowercase letter
                if (!/[a-z]/.test(value)) {
                  return Promise.reject(
                    new Error(
                      "Password must contain at least one lowercase letter!"
                    )
                  );
                }
                // At least one number
                if (!/[0-9]/.test(value)) {
                  return Promise.reject(
                    new Error("Password must contain at least one number!")
                  );
                }
                // At least one special character
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                  return Promise.reject(
                    new Error(
                      "Password must contain at least one special character!"
                    )
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <InputComponent placeholder="Password" isPassword />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
           className="col-span-full md:col-span-1"
          dependencies={["password"]} // Add dependency on password field
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <InputComponent placeholder="Confirm Password" isPassword />
        </Form.Item>

        {/* Terms and Conditions */}
        <div className="col-span-full md:col-span-2">
          <Form.Item>
            <Checkbox className="text-gray-950 text-xs md:text-sm">
              I accept the{" "}
              <Link
                href="/terms-of-condition"
                className="text-primary hover:underline"
              >
                Terms of Condition
              </Link>
            </Checkbox>
          </Form.Item>

          {/* Register Button */}
          <Button
            type="submit"
            loading={isLoading}
            className="w-full col-span-2"
          >
            Register
          </Button>
        </div>
      </Form>

      {/* Login Link */}
      <div className="mt-4 text-center">
        <h1 className="text-sm md:text-lg text-gray-9">
          Already have an account?{" "}
          <span
            onClick={() => toggleTab("login")}
            className="text-primary hover:underline cursor-pointer"
          >
            Login
          </span>
        </h1>
      </div>
    </>
  );
};

export default RegisterForm;
