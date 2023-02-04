import { createAsyncThunk } from "@reduxjs/toolkit";
import { customApi } from "../../utils/axios";

export const getAllCompaniesAdminThunk = createAsyncThunk(
  "userAdmin/getAllCompaniesAdmin",
  async (_, thunkApi) => {
    try {
      const { data } = await customApi.get(
        "/api/v1/companies?category=all&sort=pricing"
      );
      const { companies } = data;
      return companies;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteCompanyAdminThunk = createAsyncThunk(
  "userAdmin/deleteCompanyAdmin",
  async (id, thunkApi) => {
    try {
      const { data } = await customApi.delete(`/api/v1/companies/${id}`, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });

      const { msg } = data;
      return msg;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
