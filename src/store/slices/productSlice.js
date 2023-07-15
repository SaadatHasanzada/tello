import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../asyncThunk/products";

const initialState = {
  loading: false,
  error: null,
  product: {},
  colorId: [],
  sizeId: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateColorId: (state, action) => {
      state.colorId = action.payload;
    },
    updateSizeId: (state, action) => {
      state.sizeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      (state.product = action.payload), (state.loading = false);
    });
    builder.addCase(fetchProduct.pending, (state) => {
      (state.product = {}), (state.loading = true);
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      (state.product = {}),
        (state.loading = false),
        (state.error = "something went wrong...");
    });
  },
});

export const { updateColorId, updateSizeId } = productSlice.actions;
export default productSlice.reducer;
