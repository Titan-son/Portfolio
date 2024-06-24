import { createSlice } from "@reduxjs/toolkit";

export const homepageSlice = createSlice ({
  name: 'homepage',
  initialState: {
    value: 0
  },
  // A CHANGER SELON LE PROJET
  reducers : {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1}
  }
})

export const {increment, decrement} = homepageSlice.actions
export default homepageSlice.reducer
