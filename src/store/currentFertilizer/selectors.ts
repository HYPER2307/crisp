import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCurrentFertilizerState = (state: RootState) => state.currentFertilizer

export const selectIsLoading = createSelector(
  selectCurrentFertilizerState,
  (currentFertilizerState) => currentFertilizerState.isLoading
)

export const selectCurrentFertilizer = createSelector(
  selectCurrentFertilizerState,
  (currentFertilizerState) => currentFertilizerState.currentProduct?.data
)