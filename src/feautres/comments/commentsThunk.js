
import { createAsyncThunk } from "@reduxjs/toolkit";

import { customApi, unauthenticatedStatus } from "../../utils/axios";
import { logout } from "../user/userSlice";


export const createCommentThunk=createAsyncThunk('comments/createComment',async({company,text},thunkApi)=>{

    try {
        const {data}=await customApi.post('/api/v1/comments',{company,text},{
            headers:{
                authorization:`Bearer ${thunkApi.getState().user.user.token}`
            }
        })

        return 'Comentario publicado';
    } catch (error) {
        if (error.response.status === 401) {
            return thunkApi.dispatch(logout(error.response.data.msg));
          }
      return thunkApi.rejectWithValue(error.response.data.msg)
    }


})


export const updateCommentThunk=createAsyncThunk('comments/updateComment',async({id,text},thunkApi)=>{
    try {
        const {data}=await customApi.patch(`/api/v1/comments/${id}`,{text},{
            headers:{
                authorization:`Bearer ${thunkApi.getState().user.user.token}`
            }
        })

        return data.msg;
    } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
            return thunkApi.dispatch(logout(error.response.data.msg));
          }
      return thunkApi.rejectWithValue(error.response.data.msg)
    }
})


export const deleteCommentThunk=createAsyncThunk('comments/deleteComment',async({id},thunkApi)=>{
    try {
        const {data}=await customApi.delete(`/api/v1/comments/${id}`,{
            headers:{
                authorization:`Bearer ${thunkApi.getState().user.user.token}`
            }
        })
        return data.msg;
    } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
            return thunkApi.dispatch(logout(error.response.data.msg));
          }
      return thunkApi.rejectWithValue(error.response.data.msg)
    }
})