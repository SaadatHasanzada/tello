import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../server";

const apiKey = import.meta.env.VITE_API_KEY;

export const generateToken = createAsyncThunk(
  "token/generateToken",
  async (param) => {
    const body = {
      token: param,
    };

    try {
      const res = await instance.post("customers/exchange-token", body, {
        headers: {
          "X-Authorization": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return res.data.customer_id;
    } catch (error) {
      throw error;
    }
  }
);
