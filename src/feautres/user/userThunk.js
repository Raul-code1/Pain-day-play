import { createAsyncThunk } from "@reduxjs/toolkit";

import { customApi } from "../../utils/axios";
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
      const { data } = await customApi.get(`/api/v1/user/${userId}`,{
        headers:{
          authorization:`Bearer ${thunkApi.getState().user.user.token}`
        }
      });
      const { user } = data;
      return user;
    } catch (error) {
      console.log(error);
      if (error.response.status === 403 || error.response.status === 401) {
        thunkApi.dispatch(logout());
        return thunkApi.rejectWithValue("Unauthorized");
      }
      return thunkApi.rejectWithValue("Something went wrong");
    }
  }
);

/* //*User logic ends here */
