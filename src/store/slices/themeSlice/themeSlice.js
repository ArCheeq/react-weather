import { createSlice } from "@reduxjs/toolkit";

import { storage } from '../../../model/storage';

const theme = storage.getItem('theme');

const initialState = {
    theme: theme ? theme : 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light';
        }
    }
});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;