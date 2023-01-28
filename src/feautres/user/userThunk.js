import { createAsyncThunk } from "@reduxjs/toolkit";

import { customApi, unauthenticatedStatus } from "../../utils/axios";
import { logout } from "./userSlice";

/* //*Auth logic  */

export const registerUserThunk = createAsyncThunk(
  "user/registerUser",
  async (userRequest, thunkApi) => {
    try {
      const { data } = await customApi.post(
        "/api/v1/auth/register",
        userRequest
      );

      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/loginUser",
  async (userRequest, thunkApi) => {
    try {
      const { data } = await customApi.post("/api/v1/auth/login", userRequest);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

/* //*Auth ends here  */

/* //*User logic */

export const getSingleUserThunk = createAsyncThunk(
  "user/getSingleUser",
  async (_, thunkApi) => {
    const { userId } = thunkApi.getState().user.user.user;
    try {
      const { data } = await customApi.get(`/api/v1/user/${userId}`, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`,
        },
      });
      const { user } = data;
      return user;
    } catch (error) {
      unauthenticatedStatus(error, thunkApi);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async ({ name, username, email }, thunkApi) => {
    try {
      const { data } = await customApi.patch(
        "/api/v1/user/updateUser",
        { name, username, email },
        {
          headers: {
            authorization: `Bearer ${thunkApi.getState().user.user.token}`,
          },
        }
      );
      return data;
    } catch (error) {
      unauthenticatedStatus(error, thunkApi);
    }
  }
);

export const updatePasswordUserThunk = createAsyncThunk(
  "user/updatePassword",
  async ({ password, newPassword }, thunkApi) => {
    try {
      const { data } = await customApi.patch(
        "/api/v1/user/updatePasswordUser",
        { password, newPassword },
        {
          headers: {
            authorization: `Bearer ${thunkApi.getState().user.user.token}`,
          },
        }
      );

      const { msg } = data;

      return msg;
    } catch (error) {
      if (error.response.status === 401) {
        return thunkApi.rejectWithValue(error.response.data.msg);
      }
      return thunkApi.rejectWithValue('Algo fue mal');
    }
  }
);

/* //*User logic ends here */
