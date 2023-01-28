import axios from "axios";

import { logout } from "../feautres/user/userSlice";

export const customApi = axios.create({
  baseURL: "http://localhost:4444",
});

export const unauthenticatedStatus = (error, thunkApi) => {
  if (error.response.status === 403 || error.response.status === 401) {
    return thunkApi.dispatch(logout(error.response.data.msg));
  }
  return thunkApi.rejectWithValue("Something went wrong");
};
