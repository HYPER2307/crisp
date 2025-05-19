import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api-client";
import { ICurrentFertilizerResponse } from "../../types/Fertilizers";

export const CURRENT_FERTILIZER_SLICE_NAME = 'currentFertilizer';

export const getCurrentFertilizerAsync = createAsyncThunk(
  `${CURRENT_FERTILIZER_SLICE_NAME}/fetchCurrentFertilizer`,
  async ({ productId }: { productId: string }) => {
    try {
      const { data } = await instance.get<ICurrentFertilizerResponse>(`fertilizers/${productId}?populate=*`)

      console.log(data);
      

      return data;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
);