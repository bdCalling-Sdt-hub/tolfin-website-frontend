"use client";
import { useGetTermsAndConditionsQuery } from "@/redux/features/settings/settingsApi";

const TermsOfCondition = () => {
  const { data: responseData } = useGetTermsAndConditionsQuery(undefined);
  const termsConditionsData = responseData?.data?.attributes;
  return (
    <section className="w-full px-5 py-36 ">
      <div className="w-full md:container">
        <h1 className="text-xl md:text-3xl font-semibold">
          Terms Of Condition
        </h1>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: termsConditionsData?.termsConditions,
          }}
        ></div>
      </div>
    </section>
  );
};

export default TermsOfCondition;
