import { configureStore } from "@reduxjs/toolkit";

import { uiSlice } from "./feautres/ui/uiSlice";
import { userSlice } from "./feautres/user/userSlice";
import { companiesSlice } from "./feautres/companies/companiesSlice";

export const store =configureStore({
    reducer:{
        ui:uiSlice.reducer,
        user:userSlice.reducer,
        companies:companiesSlice.reducer,
    }
});


