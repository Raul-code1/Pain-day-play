/* //!Just made this slice apart from companies because each comments has their own crud logic */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { createCommentThunk,updateCommentThunk,deleteCommentThunk } from './commentsThunk';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoadingComments: false,
        isEditingComment: false,
    },
    reducers: {
        setIsEditingToTrue: (state,{payload} ) => {
            state.isEditingComment = !state.isEditingComment;
        },
        setIsEditingToFalse: (state ) => {
            state.isEditingComment = false;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(createCommentThunk.pending,(state)=>{
            state.isLoadingComments = true;
        })
        .addCase(createCommentThunk.fulfilled,(state,{payload})=>{
            state.isLoadingComments = false;
            toast.success(payload)
        })
        .addCase(createCommentThunk.rejected,(state,{payload})=>{
            state.isLoadingComments = false;
            toast.error(payload)
        })
        .addCase(updateCommentThunk.pending,(state)=>{
            state.isLoadingComments = true;
        })
        .addCase(updateCommentThunk.fulfilled,(state,{payload})=>{
            state.isLoadingComments = false;
            toast.success(payload);
            state.isEditingComment=false;
        })
        .addCase(updateCommentThunk.rejected,(state,{payload})=>{
            state.isLoadingComments = false;
            toast.error(payload);
            state.isEditingComment=false;
        })
        .addCase(deleteCommentThunk.pending,(state)=>{
            state.isLoadingComments = true;
        })
        .addCase(deleteCommentThunk.fulfilled,(state,{payload})=>{
            state.isLoadingComments = false;
            toast.success(payload);
            state.isEditingComment=false;
        })
        .addCase(deleteCommentThunk.rejected,(state,{payload})=>{
            state.isLoadingComments = false;
            toast.error(payload);
            state.isEditingComment=false;
        })        
    }
});



export const { setIsEditingToTrue,setIsEditingToFalse } = commentsSlice.actions;