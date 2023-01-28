
const calcSvgId = (id, dayTime = 'day') => {;
    if (200 <= id && id <= 232) {
        return 'thunderstorm';
    } else if (300 <= id && id <= 321) {
        return 'drizzle';
    } else if (500 <= id && id <= 531) {
        return 'rain';
    } else if (600 <= id && id <= 622) {
        return 'snow';
    } else if (id === 800) {
        return `clear-${dayTime}`;
    } else if (801 <= id && id <= 804) {
        return 'cloudy';
    } else {
        return '';
    }
}

export default calcSvgId;