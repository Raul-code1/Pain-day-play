import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteCompanyAdminThunk,
  getAllCompaniesAdminThunk,
} from "./userAdminThunk";

const companyInitialState = {
  name: "",
  location: "",
  description: "",
  category: "",
  pricing: [],
  image: "/uploads/default.jpg",
  contactPhone: "",
  website: "",
};

const initialState = {
  isLoadingAdmin: false,
  allCompaniesAdmin: [],
  filterCompanies: [],
  text: "",
  activeAdminCompany: { ...companyInitialState },
  isEditingCompany: false,
  companyIdForEdit: null,
};

export const userAdminSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    setText: (state, { payload }) => {
      state.text = payload;
    },
    filterCompaniesAction: (state) => {
      let temCompanies = [...state.allCompaniesAdmin];
      if (state.text) {
        temCompanies = temCompanies.filter((c) =>
          c.name.toLowerCase().startsWith(state.text.toLowerCase())
        );
      }
      state.filterCompanies = temCompanies;
    },
    handleChangeActiveCompany: (state, { payload }) => {
      state.activeAdminCompany[payload.name] = payload.value;
    },
    handleChangePricing: (state, { payload }) => {
      const { pricing } = state.activeAdminCompany;
      const { index, name, value } = payload;
      pricing[index][name] = value;
    },
    addPricing: (state) => {
      state.activeAdminCompany.pricing.push({ planName: "", price: 0 });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCompaniesAdminThunk.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(getAllCompaniesAdminThunk.fulfilled, (state, { payload }) => {
        state.isLoadingAdmin = false;
        state.allCompaniesAdmin = payload;
        state.filterCompanies = payload;
      })
      .addCase(getAllCompaniesAdminThunk.rejected, (state, { payload }) => {
        state.isLoadingAdmin = false;
        toast.error(payload);
      })
      .addCase(deleteCompanyAdminThunk.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(deleteCompanyAdminThunk.fulfilled, (state, { payload }) => {
        state.isLoadingAdmin = false;
        toast.success(payload);
      })
      .addCase(deleteCompanyAdminThunk.rejected, (state, { payload }) => {
        state.isLoadingAdmin = false;
        toast.error(payload);
      });
  },
});

export const {
  setText,
  filterCompaniesAction,
  handleChangeActiveCompany,
  handleChangePricing,
  addPricing,
} = userAdminSlice.actions;
