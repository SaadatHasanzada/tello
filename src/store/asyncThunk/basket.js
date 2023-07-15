import { instance } from "../../server";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;

export const createBasket = createAsyncThunk("basket/fetchBasket", async () => {
  try {
    const res = await instance.get("carts", {
      headers: { "X-Authorization": apiKey },
    });

    const basketId = res.data.id;
    localStorage.setItem("basketId", basketId);

    return res.data;
  } catch (error) {
    throw error;
  }
});

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",

  async (data) => {
    const obj = {};
    obj[data.variant_size_id] = data.sizeId;
    obj[data.variant_color_id] = data.activeColorId;
    const body = {
      id: data.product_id,
      quantity: data.count,
      options: data.product.variant_groups?.length > 0 ? obj : null,
    };
    const basket_id = localStorage.getItem("basketId");

    try {
      const res = await instance.post(`carts/${basket_id}`, body, {
        headers: {
          "X-Authorization": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
export const updateBasket = createAsyncThunk(
  "basket/updateBasket",

  async (data) => {
    const body = {
      quantity: data.count,
    };
    const basket_id = localStorage.getItem("basketId");
    try {
      const res = await instance.put(
        `carts/${basket_id}/items/${data.product_id}`,
        body,
        {
          headers: {
            "X-Authorization": apiKey,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
export const deleteBasketItem = createAsyncThunk(
  "basket/deleteBasketItem",

  async (data) => {
    const basket_id = localStorage.getItem("basketId");
    try {
      const res = await instance.delete(
        `carts/${basket_id}/items/${data.product_id}`,

        {
          headers: {
            "X-Authorization": apiKey,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
