import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getCurrentFertilizerAsync } from "./actions";
import { ICurrentFertilizerState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<ICurrentFertilizerState>) => void;

export const getCurrentFertilizerReducer: Reducer = (builder) => {
  builder.addCase(getCurrentFertilizerAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.currentProduct = action.payload;
  });
  builder.addCase(getCurrentFertilizerAsync.rejected, (state) => {
    state.isLoading = false;
    state.currentProduct = null;
  });
  builder.addCase(getCurrentFertilizerAsync.pending, (state) => {
    state.isLoading = true;
  });
}