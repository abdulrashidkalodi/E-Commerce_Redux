import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [], // Array to hold cart items
    cartCount: 0,  // To hold the count of items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      // If the product is not in the cart, add it
      if (!existingProduct) {
        state.cartItems.push(action.payload);
      }

      // Update the cart count
      state.cartCount = state.cartItems.length;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
