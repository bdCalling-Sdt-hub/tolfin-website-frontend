import { baseApi } from "../api/baseApi";

const photoAlbumApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPhotoAlbum: builder.query({
      query: () => "/one-plus-photo-album",
    }),
  }),
});

export const { useGetPhotoAlbumQuery } = photoAlbumApi;
