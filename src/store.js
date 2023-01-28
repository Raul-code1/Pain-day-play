import { configureStore } from "@reduxjs/toolkit";

import { uiSlice } from "./feautres/ui/uiSlice";
import { userSlice } from "./feautres/user/userSlice";

export const store =configureStore({
    reducer:{
        ui:uiSlice.reducer,
        user:userSlice.reducer,
    }
});


