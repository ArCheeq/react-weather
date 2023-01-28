import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useHttp } from "../../../hooks/useHttp";

const initialState = {
    forecastPeriod: 7,
    forecastPeriodLoadingStatus: 'idle',
    weather: {
        days: [{
            datetime: "",
            conditions: "",
            description: "",
            temp: 0,
            tempMax: 0,
            tempMin: 0,
            feels_like: 0,
            pressure: 0,
            precipitation: 0,
            windspeed: 0,
            winddir: 0,
            icon_id: "",
        }]
    }
}

export const fetchForecastPeriod = createAsyncThunk(
    'forecastPeriod/fetchForecastPeriod',
    ({lat, lng, start_date, end_date}) => {
        const {request} = useHttp();
        return request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${lng}/${start_date}/${end_date}?unitGroup=metric&include=days&key=Q2JZJ9ETKMCBXG4F85GXCVGLG&contentType=json`)
    }
);

const forecastPeriodSlice = createSlice({
    name: 'forecastPeriod',
    initialState,
    reducers: {
        changeForecastPeriod: (state, action) => {
            state.forecastPeriod = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecastPeriod.pending, state => {state.forecastPeriodLoadingStatus = 'loading'})
            .addCase(fetchForecastPeriod.fulfilled, (state, action) => {
                state.forecastPeriodLoadingStatus = 'idle';
                state.weather = action.payload;
            })
            .addCase(fetchForecastPeriod.rejected, state => {state.forecastPeriodLoadingStatus = 'error'})
            .addDefaultCase(() => {});
    }
});

export const {changeForecastPeriod} = forecastPeriodSlice.actions;
export default forecastPeriodSlice.reducer;