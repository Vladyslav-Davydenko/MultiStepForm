import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Data } from "./data.type";

export const selectDataState = (rootState: RootState): Data => rootState.data;

export const selectTotalPrice = createSelector(
  [selectDataState],
  (data: Data): number => {
    let price = 0;
    price += data.plan.price;
    price += data.addOns.reduce((total, addOn) => {
      return (total += addOn.price * 12);
    }, 0);
    return price;
  }
);
