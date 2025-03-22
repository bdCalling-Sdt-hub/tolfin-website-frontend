import { baseApi } from "../api/baseApi";

const reportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    report: builder.mutation({
      query: (data) => ({
        url: `/report`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useReportMutation } = reportApi;
