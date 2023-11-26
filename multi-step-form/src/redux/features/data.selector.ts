import { RootState } from "../app/store";
import { Data } from "./data.type";

export const selectDataState = (rootState: RootState): Data => rootState.data;
