import { instance } from "../../server";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    try {
      const res = await instance.get(
        `products/${id}?include=variant_groups,assets`,
        {
          headers: {
            "X-Authorization": apiKey,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchFilteredProducts = createAsyncThunk(
  "filteredProducts/fetchFilteredProducts",
  async (obj) => {
    const params = obj.params.join(",");

    try {
      const res = await instance.get(
        `products?category_slug=${obj.slug}&page=${obj.page}&sortBy=${
          obj.sortBy
        }&sortDirection=${obj.sortDirection}&limit=9&${
          obj.params.length && `query=${params}`
        }`,
        {
          headers: {
            "X-Authorization": apiKey,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSearchProducts = createAsyncThunk(
  "products/fetchSearchProducts",
  async (query) => {
    try {
      if (query) {
        const res = await instance.get(
          `products?query=${query !== null && query}`,
          {
            headers: { "X-Authorization": apiKey },
          }
        );

        return res.data;
      }
      return;
    } catch (error) {
      throw error;
    }
  }
);
