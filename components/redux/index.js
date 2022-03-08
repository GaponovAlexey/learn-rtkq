import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './products/cardSlice'
import { productApi } from './products/products'

export const store = configureStore({
  reducer: {
    card: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

