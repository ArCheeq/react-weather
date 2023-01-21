import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";

const initialState = {
    cities: [],
    citiesLoadingStatus: 'idle',
    currentCity: 'Kiev'
}

export const fetchCitiesList = createAsyncThunk(
    'currentCity/fetchCitiesList',
    () => {
        const {request} = useHttp();
        return request('http://localhost:3001/cities');
    }
);

const currentCitySlice = createSlice({
    name: 'currentCity',
    initialState,
    reducers: {
        changeCurrentCity: (state, action) => {
            state.currentCity = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCitiesList.pending, state => {state.citiesLoadingStatus = 'loading'})
            .addCase(fetchCitiesList.fulfilled, (state, action) => {
                state.cities = action.payload;
                state.citiesLoadingStatus = 'idle';
            })
            .addCase(fetchCitiesList.rejected, state => {state.citiesLoadingStatus = 'error'})
            .addDefaultCase(() => {});
    }
});

export const {changeCurrentCity} = currentCitySlice.actions;
export default currentCitySlice.reducer;
