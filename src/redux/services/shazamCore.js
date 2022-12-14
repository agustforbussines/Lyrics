import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "2220c0d2d4msh0dadae41b969651p16eb7bjsne182c306588a");
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldChart: builder.query({
      query: () => "/charts/world",
    }),
    getSongDetail: builder.query({
      query: (trackid) => `/tracks/details?track_id=${trackid}`,
    }),
    getRecommendSong: builder.query({
      query: (trackid) => `/tracks/related?track_id=${trackid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongByGenre: builder.query({
      query: (genre) => `/search/multi?query=${genre}&search_type=SONGS`,
    }),
    getSongByCountry: builder.query({
      query: (countryId) => `/charts/country?country_code=${countryId}`,
    }),
    getSongBySearch: builder.query({
      query: (search) => `/search/multi?query=${search}&search_type=SONGS`,
    }),
  }),
});

export const { useGetWorldChartQuery, useGetSongDetailQuery, useGetRecommendSongQuery, useGetArtistDetailsQuery, useGetSongByGenreQuery, useGetSongByCountryQuery, useGetSongBySearchQuery } = shazamCoreApi;
