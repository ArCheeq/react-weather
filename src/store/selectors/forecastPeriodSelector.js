import { createSelector } from "@reduxjs/toolkit";

import calcWindDirection from "../../model/calcWindDirection";
import calcWindGust from "../../model/calcWindGust";

const forecastPeriodSelector = createSelector(
    state => state.forecastPeriod.weather.days,
    state => state.forecastPeriod.forecastPeriodLoadingStatus,
    (forecastdays, forecastPeriodLoadingStatus) => {

        const weatherForecast = forecastdays.map(day => ({
            datetime: day.datetime,
            description: day.description === "" ? day.conditions : day.description,
            temp: day.temp - Math.floor(day.temp) < 0.5 ? Math.floor(day.temp) : Math.ceil(day.temp),
            tempMax: day.tempmax - Math.floor(day.tempmax) < 0.5 ? Math.floor(day.tempmax) : Math.ceil(day.tempmax),
            tempMin: day.tempmin - Math.floor(day.tempmin) < 0.5 ? Math.floor(day.tempmin) : Math.ceil(day.tempmin),
            feels_like: day.feelslike - Math.floor(day.feelslike) < 0.5 ? Math.floor(day.feelslike) : Math.ceil(day.feelslike),
            pressure: day.pressure,
            precipitation: day.precip,
            windspeed: day.windspeed,
            winddir: calcWindDirection(day.winddir),
            windgust: calcWindGust(day.windspeed),
            icon_id: day.icon
        }));

        return {weatherForecast, forecastPeriodLoadingStatus}
    }
);

export default forecastPeriodSelector;