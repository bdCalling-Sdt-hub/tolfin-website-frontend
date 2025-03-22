"use client";
import InputComponent from "@/components/ui/InputComponent";
import { useContactToAdminMutation } from "@/redux/features/contact/contactApi";
import { TError } from "@/types/error";
import { Form } from "antd";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { toast } from "sonner";
import Swal from "sweetalert2";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [form] = Form.useForm();
  const [addContactUs] = useContactToAdminMutation();

  const onFinish = async (values: IFormValues) => {
    try {
      await addContactUs(values).unwrap();
      Swal.fire({
        title: "Thank you for contacting us!",
        text: "The admin will get in touch with you as soon as possible.",
        icon: "success",
        confirmButtonText: "Got it!",
      });

      form.resetFields();
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section className="w-full  py-16 pt-32 bg-white">
      <div className="w-full px-5 py-16 md:py-20 bg-[#F1F7FE]">
        <div className="w-full md:container mx-auto">
          <h1 className="text-2xl md:text-4xl text-center font-semibold text-gray-900">
            Contact Info
          </h1>
          <h1 className="text-center">
            Let us know your opinions. Also you can write us if you have any
            questions.
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            <div className="w-full bg-white flex flex-col gap-2 justify-center items-center px-5 py-10 rounded-xl">
              <div className="bg-primary p-5 flex justify-center items-center rounded-full text-white">
                <FaLocationDot className="size-6" />
              </div>
              <h1 className="text-2xl font-semibold">Office Address</h1>
              <p>Frankfurt – Germany</p>
            </div>
            <div className="w-full bg-white flex flex-col gap-2 justify-center items-center rounded-xl">
              <div className="bg-primary p-5 flex justify-center items-center rounded-full text-white">
                <FiPhoneCall className="size-6" />
              </div>
              <h1 className="text-2xl font-semibold">Phone number</h1>
              <Link href="tel:+2114918024" className="hover:underline">
                +21 14 918 024
              </Link>
            </div>
            <div className="w-full bg-white flex flex-col gap-2 justify-center items-center rounded-xl">
              <div className="bg-primary p-5 flex justify-center items-center rounded-full text-white">
                <IoMdMail className="size-6" />
              </div>
              <h1 className="text-2xl font-semibold">Send Email</h1>
              <Link
                href="mailto: info@1plus1dating.de"
                className="hover:underline hover:text-primary"
              >
                info@1plus1dating.de
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:container px-5 mx-auto">
        <div className="w-full max-w-3xl p-8 mx-auto border rounded-xl my-16">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">
            Contact Form
          </h1>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="mt-5"
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: "Please input full name!" }]}
            >
              <InputComponent placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <InputComponent type="email" placeholder="Enter your email" />
            </Form.Item>

            {/* message */}
            <Form.Item
              name="message"
              label="Message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <InputComponent
                rows={5}
                isTextArea
                placeholder="Enter your message"
              />
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="w-full px-6 py-3 text-xs md:text-sm bg-primary text-white rounded-lg mt-5"
              >
                SEND
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Responsive Google Map Embed */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.6885088522367!2d8.670316276537262!3d50.11083707152926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0eabc46933a7%3A0xf42e3b77a4664be7!2sTaunustor%201%2C%2060310%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sbd!4v1742191650816!5m2!1sen!2sbd"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
