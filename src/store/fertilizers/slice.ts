import { createSlice } from "@reduxjs/toolkit";
import { FERTILIZERS_SLICE_NAME } from "./actions";
import { IFertilizersResponse } from "../../types/Fertilizers";
import { getFertilizersReducer } from "./reducers";

export interface IFertilizersState {
  fertilizersData: IFertilizersResponse | null,
  isLoading: boolean;
}

const initialState: IFertilizersState = {
  fertilizersData: null,
  isLoading: false,
};

export const { reducer: fertilizers } = createSlice({
  name: FERTILIZERS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getFertilizersReducer(builder)
  },
})