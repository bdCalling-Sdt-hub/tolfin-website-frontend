import { baseApi } from "../api/baseApi";

const discoverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiscoverUser: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();

        // Add filters to URLSearchParams
        if (filters) {
          Object.keys(filters).forEach((key) => {
            if (filters[key]) {
              // Make sure the filter value is not empty or undefined
              params.set(key, filters[key]);
            }
          });
        }

        return {
          url: "/user",
          method: "GET",
          params,
        };
      },
    }),
    getSingleDiscoverUser: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllDiscoverUserQuery, useGetSingleDiscoverUserQuery } =
  discoverApi;
