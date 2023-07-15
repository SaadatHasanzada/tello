import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../asyncThunk/categories";

const initialState = {
  loading: false,
  error: null,
  categories: {},
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      (state.categories = action.payload), (state.loading = false);
    });
    builder.addCase(fetchCategories.pending, (state) => {
      (state.categories = {}), (state.loading = true);
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      (state.categories = {}),
        (state.loading = false),
        (state.error = "something went wrong...");
    });
  },
});

export default categoriesSlice.reducer;
