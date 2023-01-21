import { createSelector } from "@reduxjs/toolkit";

import calcWindDirection from "../../model/calcWindDirection";
import calcWindGust from "../../model/calcWindGust";
import calcPrecipitation from "../../model/calcPrecipitation";

const currentWeatherSelector = createSelector(
    state => state.currentWeather.weather,
    state => state.currentWeather.weatherLoadingStatus,
    (currentWeather, weatherLoadingStatus) => {
        const weather = {
            temp: Math.floor(currentWeather.main.temp),
            feelsLike: Math.floor(currentWeather.main.feels_like),
            pressure: currentWeather.main.pressure,
            precipitation: calcPrecipitation(currentWeather),
            wind: {
                speed: currentWeather.wind.speed,
                direction: calcWindDirection(currentWeather.wind.deg),
                gust: calcWindGust(currentWeather.wind.speed)
            },
            cityName: currentWeather.name,
        };

        return {weather, weatherLoadingStatus}
    }
);

export default currentWeatherSelector;