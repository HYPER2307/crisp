import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IFertilizersState } from "./slice";
import { getFertilizersAsync } from "./actions";

type Reducer = (builder: ActionReducerMapBuilder<IFertilizersState>) => void;

export const getFertilizersReducer: Reducer = (builder) => {
  builder.addCase(getFertilizersAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.fertilizersData = action.payload;
  });
  builder.addCase(getFertilizersAsync.rejected, (state) => {
    state.isLoading = false;
    state.fertilizersData = null;
  });
  builder.addCase(getFertilizersAsync.pending, (state) => {
    state.isLoading = true;
  });
}