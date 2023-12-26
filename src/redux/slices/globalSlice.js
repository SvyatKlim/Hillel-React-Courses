import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        triggerSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
            state.isSidebarOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
        },
    }
});


export default globalSlice.reducer;
export const {triggerSidebar} = globalSlice.actions;
