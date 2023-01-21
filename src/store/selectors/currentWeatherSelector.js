import { createSelector } from "@reduxjs/toolkit";

import calcWindDirection from "../../model/calcWindDirection";
import calcWindGust from "../../model/calcWindGust";
import calcPrecipitation from "../../model/calcPrecipitation";

const currentWeatherSelector = createSelector(
    state => state.currentWeather.weather,
    state => state.currentWeather.weatherLoadingStatus,
    (currentWeather, weatherLoadingStatus) => {
        const weather = {
            type: {
                id: currentWeather.weather[0]['id'],
                description: currentWeather.weather[0]['description'],
            },
            temp: currentWeather.main.temp - Math.floor(currentWeather.main.temp) < 0.5 ? Math.floor(currentWeather.main.temp) : Math.ceil(currentWeather.main.temp),
            feelsLike: currentWeather.main.feels_like - Math.floor(currentWeather.main.feels_like) < 0.5 ? Math.floor(currentWeather.main.feels_like) : Math.ceil(currentWeather.main.feels_like),
            pressure: currentWeather.main.pressure,
            precipitation: calcPrecipitation(currentWeather),
            wind: {
                speed: currentWeather.wind.speed,
                direction: calcWindDirection(currentWeather.wind.deg),
                gust: calcWindGust(currentWeather.wind.speed)
            },
            sys: {
                sunrise: currentWeather.sys.sunrise * 1000,
                sunset: currentWeather.sys.sunset * 1000
            },
            cityName: currentWeather.name,
        };

        return {weather, weatherLoadingStatus}
    }
);

export default currentWeatherSelector;