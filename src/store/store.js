import {configureStore} from '@reduxjs/toolkit';

import theme from './slices/themeSlice/themeSlice';
import currentWeather from './slices/currentWeatherSlice/currentWeatherSlice';
import currentCity from './slices/currentCitySlice/currentCitySlice';
import forecastPeriod from './slices/forecastPeriodSlice/forecastPeriodSlice';
import popup from './slices/popupSlice/popupSlice';

const store = configureStore({
    reducer: {theme, popup, currentWeather, currentCity, forecastPeriod},
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;