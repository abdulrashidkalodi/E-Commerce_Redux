import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      // If the product already exists, increment the quantity
      if (existingProduct) {
        existingProduct.cartCount += 1;
      } else {
        // If the product is not in the cart, add it with an initial cartCount of 1
        state.cartItems.push({ ...action.payload, cartCount: 1 });
      }

      // Update the total cart count (sum of quantities of all items)
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.cartCount,
        0
      );
    },
    incrementCount: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.cartCount += 1;
      }

      // Update total cart count
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.cartCount,
        0
      );
    },
    decrementCount: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (product && product.cartCount > 1) {
        product.cartCount -= 1;
      }

      // Update total cart count
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.cartCount,
        0
      );
    },
    // Optional: You can add a "removeFromCart" reducer as well
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // Update the total cart count after removing an item
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.cartCount,
        0
      );
    },
  },
});

export const { addToCart, incrementCount, decrementCount, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
