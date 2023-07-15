import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesSlice from "./slices/categoriesSlice";
import productSlice from "./slices/productSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
const persistConfig = {
  key: "root",
  storage,
};

const persistedSearchReducer = persistReducer(persistConfig, searchReducer);
const persistedProductReducer = persistReducer(persistConfig, productSlice);
const persistedCartReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    search: persistedSearchReducer,
    categories: categoriesSlice,
    filter: filterSlice,
    product: persistedProductReducer,
    cart: persistedCartReducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
