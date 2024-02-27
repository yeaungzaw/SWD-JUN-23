import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import { ApiService } from "./services/Api.service";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
