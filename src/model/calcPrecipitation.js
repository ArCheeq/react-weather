const calcPrecipitation = (weather) => {
    if (weather.hasOwnProperty('snow')) {
        return `Snow - ${weather.snow['1h']} mm of precipitation recently`;
    } else if (weather.hasOwnProperty('rain')) {
        return `Rain - ${weather.rain['1h']} mm of precipitation recently`;
    } else if (weather.hasOwnProperty('rain') && weather.hasOwnProperty('snow')) {
        return `Rain with Snow - ${weather.snow['1h'] + weather.rain['1h']} mm of precipitation recently`;
    } else {
        return 'No precipitation';
    }
}

export default calcPrecipitation;