import { baseApi } from "../api/baseApi";

const countryApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `/countries`,
    }),
    getStates: builder.query({
      query: (country) => `/countries/${country}/states`,
    }),
    getCities: builder.query({
      query: ({ country, state }) =>
        `/countries/${country}/states/${state}/cities`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetStatesQuery, useGetCitiesQuery } =
  countryApi;
