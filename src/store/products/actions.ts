import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api-client";
import { IProductResponse } from "../../types/Product";

export const PRODUCTS_SLICE_NAME = 'products';

export const getProductsAsync = createAsyncThunk(
  `${PRODUCTS_SLICE_NAME}/fetchProducts`,
  async () => {
    try {
      const { data } = await instance.get<IProductResponse>('products?populate=*')

      return data;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
);