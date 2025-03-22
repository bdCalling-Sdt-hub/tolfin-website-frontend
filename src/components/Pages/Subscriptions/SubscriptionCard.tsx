"use client";
import getDurationText from "@/components/Shared/GetDurationText/GetDurationText";
import useUser from "@/hooks/useUser";
import { usePurchaseSubscriptionMutation } from "@/redux/features/subscription/subscriptionApi";
import { TError } from "@/types/error";
import { ISubscription } from "@/types/subscription";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

interface SubscriptionCardProps {
  index: number;
  plan: ISubscription;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ index, plan }) => {
  const [purchaseSubscription] = usePurchaseSubscriptionMutation();
  const user = useUser();
  const router = useRouter();
  const handlePurchaseSubscription = async (subscriptionId: string) => {
    if (!user) {
      Swal.fire({
        title: "You need to login to purchase a subscription",
        icon: "warning",
        confirmButtonText: "Login",
        cancelButtonText: "No",
        showCancelButton: true,
        confirmButtonColor: "#004BAD",
        cancelButtonColor: "#FE143F",
      }).then((result) => {
        if (result.isConfirmed) router.push("/login");
        return;
      });
      return;
    }
    try {
      const res = await purchaseSubscription({
        subscriptionId,
      }).unwrap();
      if (res?.data?.attributes?.message) {
        Swal.fire({
          title: res?.data?.attributes?.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        router.push("/my-subscription");
        return;
      }
      window.location.href = res?.data?.attributes?.sessionUrl;
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
      className={`border rounded-lg p-5 flex justify-between flex-col text-center shadow-lg w-full min-h-96 odd:bg-white even:bg-[#C2D3F4] ${
        index === 1 && "mt-0 md:-mt-16"
      }`}
    >
      <div>
        <h2 className="text-xl  mb-2">{plan.subscriptionName}</h2>
        <p className="text-2xl md:text-4xl font-bold mb-2">
          ${plan.subscriptionFee}
        </p>
        <p className="even:text-primary text-xl md:text-2xl mb-4 text-gray-800 font-semibold">
          {getDurationText(plan?.subscriptionDuration)}
        </p>
        <div className="flex justify-center items-center mt-8">
          <ul className="text-gray-600 mb-6 flex flex-col  gap-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex  gap-2">
                <div className="size-[25px] border-2 border-primary rounded-full flex items-center justify-center p-2 ">
                  <span className="text-primary">✔</span>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => handlePurchaseSubscription(plan._id)}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Upgrade
      </button>
    </div>
  );
};

export default SubscriptionCard;
