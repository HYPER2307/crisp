import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IProductsState } from "./slice";
import { getProductsAsync } from "./actions";

type Reducer = (builder: ActionReducerMapBuilder<IProductsState>) => void;

export const getProductReducer: Reducer = (builder) => {
  builder.addCase(getProductsAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.productsData = action.payload;
  });
  builder.addCase(getProductsAsync.rejected, (state) => {
    state.isLoading = false;
    state.productsData = null;
  });
  builder.addCase(getProductsAsync.pending, (state) => {
    state.isLoading = true;
  });
}