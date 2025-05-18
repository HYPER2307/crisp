import { createSlice } from "@reduxjs/toolkit";
import { CURRENT_PRODUCT_SLICE_NAME,  } from "./actions";
import { ICurrentProductResponse } from "../../types/Product";
import { getCurrentProductReducer } from "./reducers";

export interface ICurrentProductState {
  currentProduct: ICurrentProductResponse | null,
  isLoading: boolean,
}

const initialState: ICurrentProductState = {
  currentProduct: null,
  isLoading: false,
};

export const { reducer: currentProduct } = createSlice({
  name: CURRENT_PRODUCT_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getCurrentProductReducer(builder);
  },
});