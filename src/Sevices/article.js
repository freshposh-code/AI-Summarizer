import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const articleHeaders = {
//     'X-RapidAPI-Key': 'ee3774757cmsh578da00a94fb746p1b3bb8jsnc178adc02f26',
//     'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//   }

const baseUrl = 'https://article-extractor-and-summarizer.p.rapidapi.com/'

// const createRequest = (url) => ({url, Headers:articleHeaders})

export const articleApi = createApi({
    reducerPath:"articleApi",
    baseQuery: fetchBaseQuery({ baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'ee3774757cmsh578da00a94fb746p1b3bb8jsnc178adc02f26');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (buider) => ({
        getSummary: buider.query({
            query: (params) => `/summarize?url=
            ${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi