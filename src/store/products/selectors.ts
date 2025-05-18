import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectProductsState = (state: RootState) => state.products

export const selectIsLoading = createSelector(
  selectProductsState,
  (productsState) => productsState.isLoading
)

export const selectProductsData = createSelector(
  selectProductsState,
  (productsState) => productsState.productsData
)