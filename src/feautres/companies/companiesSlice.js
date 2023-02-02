import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getAllCompaniesThunk,getSingleCompanyThunk } from "./companiesThunk";

const initialState = {
  isLoading: false,
  allCompanies: [],
  categoryOptions: [
    { value: "paintball", label: "Paintball" },
    { value: "airsoft", label: "Airsoft" },
    { value: "laser tag", label: "Laser tag" },
    { value: "all", label: "Todos" },
  ],
  sortOptions: [
    { value: "pricing", label: "Menor precio" },
    { value: "-pricing", label: "Mayor precio" },
  ],
  totalActiveCompanies:null,
  activeCategory:'all',
  activeSort:'pricing',
  company:null,
  comments:[]
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setActiveCategory: (state,{payload}) => {
      state.activeCategory = payload;
    },
    setActiveSort: (state,{payload}) => {
      state.activeSort = payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getAllCompaniesThunk.pending,(state)=>{
        state.isLoading=true;
    })
    .addCase(getAllCompaniesThunk.fulfilled,(state,{payload})=>{
        state.isLoading=false;
        state.allCompanies=payload.companies;
        state.totalActiveCompanies=payload.count;
    })
    .addCase(getAllCompaniesThunk.rejected,(state,{payload})=>{
        state.isLoading=false;
        toast.error(payload);
    })
    .addCase(getSingleCompanyThunk.pending,(state)=>{
      state.isLoading=true;
    })
    .addCase(getSingleCompanyThunk.fulfilled,(state,{payload})=>{
      state.isLoading=false;
      state.company=payload;
      state.comments=payload.comments;
    })
    .addCase(getSingleCompanyThunk.rejected,(state,{payload})=>{
      state.isLoading=false;
      toast.error(payload);
    })
  }
});

export const { setActiveCategory,setActiveSort } = companiesSlice.actions;
