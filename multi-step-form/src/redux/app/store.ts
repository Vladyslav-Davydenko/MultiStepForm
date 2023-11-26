import { configureStore } from "@reduxjs/toolkit";
import { DataSlice } from "../features/data.slice";

export const rootReducer = () => {
  return {
    [DataSlice.name]: DataSlice.reducer,
  };
};

export const store = configureStore({
  reducer: rootReducer(),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type RootReducer = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
