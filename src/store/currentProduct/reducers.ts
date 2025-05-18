import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getCurrentProductAsync } from "./actions";
import { ICurrentProductState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<ICurrentProductState>) => void;

export const getCurrentProductReducer: Reducer = (builder) => {
  builder.addCase(getCurrentProductAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.currentProduct = action.payload;
  });
  builder.addCase(getCurrentProductAsync.rejected, (state) => {
    state.isLoading = false;
    state.currentProduct = null;
  });
  builder.addCase(getCurrentProductAsync.pending, (state) => {
    state.isLoading = true;
  });
}