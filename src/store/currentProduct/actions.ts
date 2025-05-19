import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api-client";
import { ICurrentProductResponse } from "../../types/Product";

export const CURRENT_PRODUCT_SLICE_NAME = 'currentProduct';

export const getCurrentProductAsync = createAsyncThunk(
  `${CURRENT_PRODUCT_SLICE_NAME}/fetchCurrentProduct`,
  async ({ productId }: { productId: string }) => {
    try {
      const { data } = await instance.get<ICurrentProductResponse>(`products/${productId}?populate=*`)

      console.log(data);
      

      return data;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
);