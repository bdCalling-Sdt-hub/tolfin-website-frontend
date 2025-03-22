"use client";
import quotes from "@/assets/success/Qotes.png";
import Image from "next/image";
import { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonComponent from "@/components/ui/ButtonComponent";
import InputComponent from "@/components/ui/InputComponent";
import useUser from "@/hooks/useUser";
import {
  useAddReviewMutation,
  useGetReviewQuery,
} from "@/redux/features/review/reviewApi";
import { TError } from "@/types/error";
import { ISuccessStoryCardProps } from "@/types/successStory";
import { Form, Modal, Rate } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsCard from "./TestimonialsCard";
import TestimonialsSkeleton from "./TestimonialsSkeleton";

const Testimonials = () => {
  const user = useUser();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: responseData, isLoading } = useGetReviewQuery(undefined);
  const router = useRouter();

  const allSuccessStory = responseData?.data?.attributes?.results;

  const [addReview, { isLoading: isReviewLoading }] = useAddReviewMutation();

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Handle review submission
  const handleAddReview = async (values: {
    rating: number;
    comment: string;
  }) => {
    //if user is not logged in redirect to login page
    if (!user) {
      setIsModalOpen(false);
      form.resetFields();
      Swal.fire({
        title: "You need to login to leave a review",
        icon: "warning",
        confirmButtonText: "Login",
        cancelButtonText: "No",
        showCancelButton: true,
        confirmButtonColor: "#004BAD",
        cancelButtonColor: "#FE143F",
      }).then((result) => {
        if (result.isConfirmed) router.push("/login");
      });
      return;
    }
    const data = {
      rating: values.rating,
      comment: values.comment,
    };

    try {
      const res = await addReview(data).unwrap();
      toast.success(res.message);
      form.resetFields();
      closeModal();
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };
  let content = null;
  if (isLoading) {
    content = (
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{ dynamicBullets: true }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <TestimonialsSkeleton />
            </SwiperSlide>
          ))}
      </Swiper>
    );
  } else if (allSuccessStory?.length === 0) {
    content = (
      <h1 className="text-2xl font-semibold text-center">
        No Testimonials Found
      </h1>
    );
  } else if (allSuccessStory?.length > 0) {
    content = (
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{ dynamicBullets: true }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {allSuccessStory?.map((testimonial: ISuccessStoryCardProps) => (
          <SwiperSlide key={testimonial._id}>
            <TestimonialsCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <section className="w-full px-5 py-16">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center">
        Feedback from <span className="text-primary"> our valued users</span>
      </h1>
      <div className="w-full md:container">
        <div className="w-full bg-white p-8 md:p-20 mt-16 shadow-md grid grid-cols-1 md:grid-cols-2 gap-5 relative rounded-xl">
          <div>
            <Image
              width={120}
              height={120}
              src={quotes}
              alt="quotes"
              className="mx-auto"
            />
            <div className="mt-16">
              <h1 className="text-2xl font-semibold">Testimonials</h1>
            </div>
          </div>
          <div className="md:absolute md:top-[50%] left-0 md:left-[330px] lg:left-[500px] right-6 transform md:-translate-y-1/3">
            {content}
          </div>
        </div>
        {user && (
          <div className="flex justify-end mt-8">
            <button
              onClick={openModal}
              className="px-6 py-3 text-xs md:text-sm bg-primary text-white rounded-lg"
            >
              Leave Review
            </button>
          </div>
        )}
      </div>
      <Modal centered open={isModalOpen} onCancel={closeModal} footer={null}>
        <div className="bg-white  rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Leave a Review for 1PLUS1
          </h2>
          <p className="mb-4 text-center">
            How would you rate working at Sam.AI?
          </p>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleAddReview} // Call handleAddReview on form submission
            className="space-y-4 mt-3"
          >
            <Form.Item name="rating" className="text-center">
              <Rate
                style={{ fontSize: "24px" }}
                allowHalf
                className="text-center"
              />
            </Form.Item>
            <Form.Item
              name="comment"
              rules={[
                {
                  required: true,
                  message: "Please provide your comment",
                },
                {
                  min: 10,
                  message: "Comment must be at least 10 characters long",
                },
                {
                  max: 250,
                  message: "Comment must be at most 250 characters long",
                },
              ]}
            >
              <InputComponent
                isTextArea
                rows={3}
                placeholder="Enter your comment"
              />
            </Form.Item>
            <div className="flex justify-end">
              <Form.Item>
                <ButtonComponent
                  loading={isReviewLoading}
                  type="submit"
                  className="px-6 py-3 text-xs md:text-sm bg-primary text-white rounded-lg"
                >
                  Submit Review
                </ButtonComponent>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </section>
  );
};

export default Testimonials;
