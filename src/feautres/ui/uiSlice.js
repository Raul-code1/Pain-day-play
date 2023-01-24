import { createSlice } from '@reduxjs/toolkit';


const initialState={
    isMobileMenuOpen: false,
}


export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openMenuMobile: (state ) => {
            state.isMobileMenuOpen = true;
        },
        closeMenuMobile: (state ) => {
            state.isMobileMenuOpen = false;
        },
    }
});



export const { openMenuMobile,closeMenuMobile } = uiSlice.actions;