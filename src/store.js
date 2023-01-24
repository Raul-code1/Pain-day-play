import { configureStore } from "@reduxjs/toolkit";

import { uiSlice } from "./feautres/ui/uiSlice";

export const store =configureStore({
    reducer:{
        ui:uiSlice.reducer,
    }
});


