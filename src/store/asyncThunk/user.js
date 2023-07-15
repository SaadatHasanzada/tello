import { toast } from "react-toastify";
import { instance } from "../../server";
import { createAsyncThunk } from "@reduxjs/toolkit";

const publicApiKey = import.meta.env.VITE_API_KEY;
const secretApiKey = import.meta.env.VITE_SECRET_KEY;

export const createUser = createAsyncThunk("user/createUser", async (data) => {
  const body = {
    email: data?.email,
    phone: data?.phone,
    firstname: data?.name,
    lastname: data?.surname,
    external_id: null,
  };
  try {
    const res = await instance.post("customers", body, {
      headers: {
        "X-Authorization": secretApiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(res.data);

    return res.data;
  } catch (error) {
    throw error;
  }
});

export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
  const body = {
    email: data?.email,
    base_url: data?.base_url,
  };
  try {
    const res = await instance.post("customers/email-token", body, {
      headers: {
        "X-Authorization": publicApiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});
export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const res = await instance.get(
      `customers/${localStorage.getItem("customerId")}`,
      {
        headers: {
          "X-Authorization": secretApiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
});
export const updateUser = createAsyncThunk("user/updateUser", async (obj) => {
  const body = {
    email: obj.data.email,
    firstname: obj.data.name,
    lastname: obj.data.surname,
    phone: obj.data.phone,
    external_id: null,
  };
  try {
    const res = await instance.put(`customers/${obj.id}`, body, {
      headers: {
        "X-Authorization": secretApiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    toast.success("Dəyişikliklər qeydə alındı");

    return res.data;
  } catch (error) {
    throw error;
  }
});
