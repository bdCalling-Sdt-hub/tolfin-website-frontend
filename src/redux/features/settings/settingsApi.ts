import { baseApi } from "../api/baseApi";

const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "/settings/privacy-policy",
        method: "GET",
      }),
    }),
    getTermsAndConditions: builder.query({
      query: () => ({
        url: "/settings/terms-conditions",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPrivacyPolicyQuery,
  useGetTermsAndConditionsQuery,
} = settingsApi;
