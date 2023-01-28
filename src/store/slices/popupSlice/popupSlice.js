import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popup: false,
    datetime: 0
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        togglePopup: (state, action) => {
            state.popup = !state.popup;
            state.datetime = action.payload ? action.payload : 0;
        }
    }
});

export const {togglePopup} = popupSlice.actions;
export default popupSlice.reducer;