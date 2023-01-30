import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "services/home.api";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export default store;
