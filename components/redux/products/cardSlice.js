import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 228,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.push(payload)
    },
    removeItem: (state, { payload }) => {
      return state.filter(el => el.id !== payload.id)
    },
  },
})

export const cardReducer = counterSlice.reducer
export const cardActions = counterSlice.actions

