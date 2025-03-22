import { baseApi } from "../api/baseApi";

const flowerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlowers: builder.query({
      query: () => {
        return `/flower/my-sent-flowers`;
      },
      providesTags: ["Flower"],
    }),
    sendFlower: builder.mutation({
      query: (data) => ({
        url: `/flower`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Flower"],
    }),
    whoSentMeFlowers: builder.query({
      query: ({ page, limit }) =>
        `/flower/who-sent-me-flowers?page=${page}&limit=${limit}`,
      providesTags: ["Flower"],
    }),
    removeFlower: builder.mutation({
      query: (receiverId) => ({
        url: `/flower/${receiverId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Flower"],
    }),
  }),
});

export const {
  useGetFlowersQuery,
  useSendFlowerMutation,
  useWhoSentMeFlowersQuery,
  useRemoveFlowerMutation,
} = flowerApi;
