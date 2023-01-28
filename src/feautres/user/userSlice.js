import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { registerUserThunk,loginUserThunk,getSingleUserThunk } from './userThunk';
import { getUserFromLocalStorage,addUserToLocalStorage, removeUserFromLocalStorage } from '../../utils/useLocalStorage';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        user:getUserFromLocalStorage('user'),
        userProfile:getUserFromLocalStorage('userProfile'),
        isUserLoggedOut:getUserFromLocalStorage('userSession'),
    },
    reducers: {
        logout: (state ) => {
            state.isLoading=false;
            state.isUserLoggedOut='logout';
            state.user=null;
            state.userProfile=null;
            toast.success('Logged out 🚀 ')
            addUserToLocalStorage('userSession',state.isUserLoggedOut)
            removeUserFromLocalStorage('user')
            removeUserFromLocalStorage('userProfile')
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUserThunk.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(registerUserThunk.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.user=payload;
            state.isUserLoggedOut='login';
            toast.success(`Bienvenido ${payload.user?.name} 😎`);
            addUserToLocalStorage('user',payload);
            addUserToLocalStorage('userSession', state.isUserLoggedOut);
        })
        .addCase(registerUserThunk.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload);
        })
        .addCase(loginUserThunk.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginUserThunk.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.user=payload;
            state.isUserLoggedOut='login';
            toast.success(`Hola de nuevo ${payload.user?.name}👋`)
            addUserToLocalStorage('user',payload);
            addUserToLocalStorage('userSession', state.isUserLoggedOut);
        })
        .addCase(loginUserThunk.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload);
        })
        .addCase(getSingleUserThunk.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getSingleUserThunk.fulfilled,(state,{payload})=>{
            state.isLoading=false;
            state.userProfile=payload;
            addUserToLocalStorage('userProfile',payload);
        })
        .addCase(getSingleUserThunk.rejected,(state,{payload})=>{
            state.isLoading=false;
            toast.error(payload)
        })
    }
});



export const { logout } = userSlice.actions;