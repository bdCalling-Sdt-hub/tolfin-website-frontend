import { baseApi } from "../api/baseApi";

const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubscription: builder.query({
      query: () => `/subscription`,
    }),
    purchaseSubscription: builder.mutation({
      query: (data) => ({
        url: `/subscription/purchase-subscription`,
        method: "POST",
        body: data,
      }),
    }),
    getMySubscription: builder.query({
      query: () => `/my-subscription`,
    }),
  }),
});

export const {
  useGetAllSubscriptionQuery,
  usePurchaseSubscriptionMutation,
  useGetMySubscriptionQuery,
} = subscriptionApi;
