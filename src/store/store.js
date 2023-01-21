import {configureStore} from '@reduxjs/toolkit';

import theme from './slices/themeSlice/themeSlice';
import currentWeather from './slices/currentWeatherSlice/currentWeatherSlice';
import currentCity from './slices/currentCitySlice/currentCitySlice';

const store = configureStore({
    reducer: {theme, currentWeather, currentCity},
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;