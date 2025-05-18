import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_SLICE_NAME } from "./actions";
import { IProductResponse } from "../../types/Product";
import { getProductReducer } from "./reducers";

export interface IProductsState {
  productsData: IProductResponse | null,
  isLoading: boolean,
}

const initialState: IProductsState = {
  productsData: null,
  isLoading: false,
};

export const { reducer: products } = createSlice({
  name: PRODUCTS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getProductReducer(builder);
  },
});