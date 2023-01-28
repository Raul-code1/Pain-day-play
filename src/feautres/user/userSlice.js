import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  registerUserThunk,
  loginUserThunk,
  getSingleUserThunk,
  updateUserThunk,
  updatePasswordUserThunk,
} from "./userThunk";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/useLocalStorage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: getUserFromLocalStorage("user"),
    userProfile: getUserFromLocalStorage("userProfile"),
    isUserLoggedOut: getUserFromLocalStorage("userSession"),
  },
  reducers: {
    logout: (state, { payload }) => {
      state.isLoading = false;
      state.isUserLoggedOut = "logout";
      state.user = null;
      state.userProfile = null;
      toast(payload);
      addUserToLocalStorage("userSession", state.isUserLoggedOut);
      removeUserFromLocalStorage("user");
      removeUserFromLocalStorage("userProfile");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isUserLoggedOut = "login";
        toast.success(`Bienvenido ${payload.user?.name} 😎`);
        addUserToLocalStorage("user", payload);
        addUserToLocalStorage("userSession", state.isUserLoggedOut);
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isUserLoggedOut = "login";
        toast.success(`Hola de nuevo ${payload.user?.name}👋`);
        addUserToLocalStorage("user", payload);
        addUserToLocalStorage("userSession", state.isUserLoggedOut);
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getSingleUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userProfile = payload;
        addUserToLocalStorage("userProfile", payload);
      })
      .addCase(getSingleUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        toast.success("Informacion actualizada");
        state.isUserLoggedOut = "login";
        addUserToLocalStorage("user", payload);
        addUserToLocalStorage("userSession", state.isUserLoggedOut);
      })
      .addCase(updateUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updatePasswordUserThunk.pending,(state)=>{
        state.isLoading = true;
      })
      .addCase(updatePasswordUserThunk.fulfilled,(state,{payload})=>{
        state.isLoading = false;
        toast.success(payload)
      })
      .addCase(updatePasswordUserThunk.rejected,(state,{payload})=>{
        state.isLoading = false;
        toast.error(payload)
      })
  },
});

export const { logout } = userSlice.actions;
