import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/products";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
