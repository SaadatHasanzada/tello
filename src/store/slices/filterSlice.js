import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredProducts } from "../asyncThunk/products";

const initialState = {
  loading: false,
  error: null,
  products: [],
  params: [],
  sortBy: "created_at",
  sortDirection: "desc",
  slug: "",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilteredParams: (state, action) => {
      if (state.params.includes(action.payload)) {
        state.params = state.params.filter((el) => el !== action.payload);
      } else if (action.payload == "") {
        state.params = [];
      } else {
        state.params.push(action.payload);
      }
    },
    updateSort: (state, action) => {
      state.sortBy = action.payload;
    },
    updateDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    updateSlug: (state, action) => {
      state.slug = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilteredProducts.fulfilled, (state, action) => {
      (state.products = action.payload), (state.loading = false);
    });
    builder.addCase(fetchFilteredProducts.pending, (state) => {
      (state.products = []), (state.loading = true);
    });
    builder.addCase(fetchFilteredProducts.rejected, (state, action) => {
      (state.products = []),
        (state.loading = false),
        (state.error = "something went wrong...");
    });
  },
});
export const {
  updateParams,
  updateFilteredParams,
  updateSort,
  updateDirection,
  updateSlug,
  updatePage,
} = filterSlice.actions;
export default filterSlice.reducer;
