import { createSlice } from "@reduxjs/toolkit";
import {
  createBasket,
  addToBasket,
  updateBasket,
  deleteBasketItem,
} from "../asyncThunk/basket";
const initialState = {
  loading: false,
  error: null,
  basket: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
        state.loading = false;
      })
      .addCase(createBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
        state.loading = false;
      })
      .addCase(addToBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
        state.loading = false;
      })
      .addCase(updateBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBasketItem.fulfilled, (state, action) => {
        state.basket = action.payload;
        state.loading = false;
      })
      .addCase(deleteBasketItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBasketItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
