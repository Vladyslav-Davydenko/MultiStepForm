import { createSlice } from "@reduxjs/toolkit";

import { Data } from "./data.type";

const initialState: Data = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    name: "Arcade",
    isMonthly: true,
    price: 1,
  },
  addOns: [],
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setPlanData: (state, action) => {
      state.plan = action.payload;
    },
    setAddOns: (state, action) => {
      state.addOns = action.payload;
    },
  },
});

export const dataActions = DataSlice.actions;
