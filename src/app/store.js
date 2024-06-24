import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "../features/Homepage/homepageSlice.js";

export const store = configureStore({
  reducer: {
      homepage: homepageSlice
  }
})
