import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("fetchProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});


const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products_data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    // isloading true
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    // isloading false
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products_data = action.payload;
    });
    // isloading error
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error fetching products:", action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});


export default productSlice.reducer;
