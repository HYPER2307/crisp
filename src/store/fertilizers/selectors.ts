import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFertilizersState = (state: RootState) => state.fertilizers

export const selectIsLoading = createSelector(
  selectFertilizersState,
  (fertilizersState) => fertilizersState.isLoading
)

export const selectFertilizersData = createSelector(
  selectFertilizersState,
  (fertilizersState) => fertilizersState.fertilizersData
)