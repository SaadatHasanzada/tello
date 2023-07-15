import { instance } from "../../server";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await instance.get("categories", {
        headers: { "X-Authorization": apiKey },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
