const calcPrecipitation = (weather) => {
    if (weather.hasOwnProperty('snow')) {
        return `Сніг - за останній час ${weather.snow['1h']} мм опадів`;
    } else if (weather.hasOwnProperty('rain')) {
        return `Дощ - за останній час ${weather.rain['1h']} мм опадів`;
    } else if (weather.hasOwnProperty('rain') && weather.hasOwnProperty('snow')) {
        return `Дощ зі снігом - за останній час ${weather.snow['1h'] + weather.rain['1h']} мм опадів`;
    } else {
        return 'Без опадів';
    }
}

export default calcPrecipitation;