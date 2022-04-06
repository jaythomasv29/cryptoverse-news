import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const crpytoNewsApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': 'd834dcc8e2msh4630b2da619145bp14df2djsn757d0ecd5385'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: crpytoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;