import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/useHttp";

const initialState = {
    weather: {
        weather: [{
            id: 0,
            description: ''
        }],
        main: {
            temp: '',
            feels_like: ''
        },
        wind: {
            speed: 0,
            deg: 0
        },
        rain: {},
        snow: {},
        clouds: {},
        sys: {
            sunrise: 0,
            sunset: 0
        },
        name: ''
    },
    weatherLoadingStatus: 'idle',
}

const api_key = '53b553c9b28d72a2336f3dc07f81156c';

export const fetchCurrentWeather = createAsyncThunk(
    'currentWeather/fetchCurrentWeather',
    (cityName) => {
        const {request} = useHttp();
        return request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ua&units=metric&appid=${api_key}`);
    }
);

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.pending, state => {state.weatherLoadingStatus = 'loading'})
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.weather = action.payload;
                state.weatherLoadingStatus = 'idle';
            })
            .addCase(fetchCurrentWeather.rejected, state => {state.weatherLoadingStatus = 'error'})
            .addDefaultCase(() => {});
    }

});

export default currentWeatherSlice.reducer;