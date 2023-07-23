import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
           headers.set('X-RapidAPI-KEY', '13eb87f54amshe404ae241521dbep10307cjsna31302f29e1b');

           return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi

