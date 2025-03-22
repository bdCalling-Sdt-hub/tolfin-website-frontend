"use client";

import { useGetPrivacyPolicyQuery } from "@/redux/features/settings/settingsApi";

const PrivacyPolicy = () => {
  const { data: responseData } = useGetPrivacyPolicyQuery(undefined);
  const privacyPolicyData = responseData?.data?.attributes;
  return (
    <section className="w-full px-5 py-36 ">
      <div className="w-full md:container">
        <h1 className="text-xl md:text-3xl font-semibold">Privacy Policy</h1>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: privacyPolicyData?.privacyPolicy }}
        ></div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
