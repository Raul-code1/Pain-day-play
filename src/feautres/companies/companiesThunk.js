import { createAsyncThunk } from "@reduxjs/toolkit";

import { customApi } from "../../utils/axios";

export const getAllCompaniesThunk = createAsyncThunk(
  "companies/getAllCompanies",
  async (_, thunkApi) => {
    const { activeCategory, activeSort } = thunkApi.getState().companies;

    try {
      const { data } = await customApi.get(
        `/api/v1/companies?category=${activeCategory}&sort=${activeSort}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue("Algo salio mal");
    }
  }
);

export const getSingleCompanyThunk = createAsyncThunk(
  "companies/getSingleCompany",
  async (id, thunkApi) => {
    try {
      
      const { data}=await customApi.get(`/api/v1/companies/${id}`)
      const {company}=data;
      return company
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue('Algo salio mal');
    }
  }
);
