import {configureStore} from '@reduxjs/toolkit';

import theme from './slices/themeSlice/themeSlice';
import currentWeather from './slices/currentWeatherSlice/currentWeatherSlice';

const store = configureStore({
    reducer: {theme, currentWeather},
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;