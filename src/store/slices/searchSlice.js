import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchProducts } from "../asyncThunk/products";
const initialState = {
  searchHistory: [],
  products: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateHistory: (state, action) => {
      state.searchHistory.push(action.payload);
      console.log(action.payload);
    },
    deleteHistory: (state) => {
      state.searchHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
      (state.products = action.payload), (state.loading = false);
    });
    builder.addCase(fetchSearchProducts.pending, (state) => {
      (state.products = []), (state.loading = true);
    });
    builder.addCase(fetchSearchProducts.rejected, (state, action) => {
      (state.products = []),
        (state.loading = false),
        (state.error = "something went wrong...");
    });
  },
});

export const { updateHistory, deleteHistory } = searchSlice.actions;

export default searchSlice.reducer;
