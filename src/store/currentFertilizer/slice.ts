import { createSlice } from "@reduxjs/toolkit";
import { CURRENT_FERTILIZER_SLICE_NAME,  } from "./actions";

import { ICurrentFertilizerResponse } from "../../types/Fertilizers";
import { getCurrentFertilizerReducer } from "./reducers";

export interface ICurrentFertilizerState {
  currentProduct: ICurrentFertilizerResponse | null,
  isLoading: boolean,
}

const initialState: ICurrentFertilizerState = {
  currentProduct: null,
  isLoading: false,
};

export const { reducer: currentFertilizer } = createSlice({
  name: CURRENT_FERTILIZER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getCurrentFertilizerReducer(builder);
  },
});