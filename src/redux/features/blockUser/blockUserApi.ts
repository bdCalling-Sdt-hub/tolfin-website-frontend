import { baseApi } from "../api/baseApi";

const blockUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlockUser: builder.mutation({
      query: (data) => ({
        url: "/block-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getBlockedUser: builder.query({
      query: () => "/block-user",
      providesTags: ["User"],
    }),
    unBlockUser: builder.mutation({
      query: (blockedUserId) => ({
        url: `/block-user/${blockedUserId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useAddBlockUserMutation,
  useGetBlockedUserQuery,
  useUnBlockUserMutation,
} = blockUserApi;
