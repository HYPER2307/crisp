import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCurrentProductState = (state: RootState) => state.currentProduct

export const selectIsLoading = createSelector(
  selectCurrentProductState,
  (currentProductState) => currentProductState.isLoading
)

export const selectCurrentProduct = createSelector(
  selectCurrentProductState,
  (currentProductState) => currentProductState.currentProduct?.data
)