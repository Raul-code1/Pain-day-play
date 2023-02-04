import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createCompanyAdminThunk,
  deleteCompanyAdminThunk,
  getAllCompaniesAdminThunk,
  updateCompanyAdminThunk,
  uploadCompanyImage,
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
  imagePath: "",
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
    clearActiveAdminCompany: (state) => {
      state.activeAdminCompany = { ...companyInitialState };
    },
    setActiveCompanyForEdit: (state, { payload }) => {
      state.isEditingCompany = true;
      state.activeAdminCompany = payload.company;
      state.companyIdForEdit = payload.id;
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
      })
      .addCase(createCompanyAdminThunk.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(createCompanyAdminThunk.fulfilled, (state, { payload }) => {
        state.isLoadingAdmin = false;
        toast.success(payload);
      })
      .addCase(createCompanyAdminThunk.rejected, (state, { payload }) => {
        state.isLoadingAdmin = false;
        toast.error(payload);
      })
      .addCase(uploadCompanyImage.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(uploadCompanyImage.fulfilled, (state, { payload }) => {
        state.isLoadingAdmin = false;
        state.imagePath = payload;
        toast.success("Image subida al servidor correctamente");
      })
      .addCase(uploadCompanyImage.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(updateCompanyAdminThunk.pending, (state) => {
        state.isLoadingAdmin = true;
      })
      .addCase(updateCompanyAdminThunk.fulfilled, (state, { payload }) => {
        state.isLoadingAdmin = false;
        toast.success(payload);
      })
      .addCase(updateCompanyAdminThunk.rejected, (state, { payload }) => {
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
  clearActiveAdminCompany,
  setActiveCompanyForEdit,
} = userAdminSlice.actions;
