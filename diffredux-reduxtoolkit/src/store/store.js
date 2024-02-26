import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
