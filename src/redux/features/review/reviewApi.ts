import { baseApi } from "../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => `/success-story-review`,
      providesTags: ["Review"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: `/success-story-review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { useGetReviewQuery, useAddReviewMutation } = reviewApi;
