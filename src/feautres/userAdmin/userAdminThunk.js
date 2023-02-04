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

export const createCompanyAdminThunk = createAsyncThunk(
  "userAdmin/createCompanyAdmin",
  async (company, thunkApi) => {
    try {
      const { data } = await customApi.post("/api/v1/companies", company, {
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

export const updateCompanyAdminThunk = createAsyncThunk(
  "userAdmin/updateCompanyAdmin",
  async (company, thunkApi) => {
    const { companyIdForEdit } = thunkApi.getState().userAdmin;

    try {
      const { data } = await customApi.patch(
        `/api/v1/companies/${companyIdForEdit}`,
        company,
        {
          headers: {
            authorization: `Bearer ${thunkApi.getState().user.user.token}`,
          },
        }
      );

      const { msg } = data;
      return msg;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const uploadCompanyImage = createAsyncThunk(
  "userAdmin/uploadCompanyImage",
  async (imageFile, thunkApi) => {
    const formData = new FormData();
    formData.append("image", imageFile, imageFile.name);

    try {
      const { data } = await customApi.post(
        "/api/v1/companies/uploadImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${thunkApi.getState().user.user.token}`,
          },
        }
      );
      const { image } = data;
      console.log(image);
      return image;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
