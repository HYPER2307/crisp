
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api-client";
import { IFertilizersResponse } from "../../types/Fertilizers";

export const FERTILIZERS_SLICE_NAME = 'fertilizers';

export const getFertilizersAsync = createAsyncThunk(
  `${FERTILIZERS_SLICE_NAME}/fetchFertilizers`,
  async () => {
    try {
      const { data } = await instance.get<IFertilizersResponse>(`fertilizers/?populate=*`)

      console.log(data);
      

      return data;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
);