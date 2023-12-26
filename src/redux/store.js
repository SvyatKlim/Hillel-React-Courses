import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";
import globalReducer from "./slices/globalSlice.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        global: globalReducer,
    }
})