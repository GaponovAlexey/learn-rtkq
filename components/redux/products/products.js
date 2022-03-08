import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const productApi = createApi({
//   reducerPath: 'api/products',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: (limit = 5) => `/products/${limit}`,
//     }),
//   }),
// })

// export const { useGetProductsQuery } = productApi

export const productApi = createApi({
  reducerPath: 'redux/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    GetProd: builder.query({
      query: (count = 1) => `/products/${count}`,
    }),
  }),
})

export const { useGetProdQuery } = productApi
