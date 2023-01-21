
const calcWindGust = (speed) => {
    if (0 <= speed && speed <= 0.2) {
        return 'штиль';
    } else if (0.3 <= speed && speed <= 3.3) {
        return 'легкий вітерець';
    } else if (3.4 <= speed && speed <= 7.9) {
        return 'помірний вітер';
    } else if (8 <= speed && speed <= 13.9) {
        return 'сильний вітер';
    } else if (14 <= speed && speed <= 20.7) {
        return 'дуже сильний вітер';
    } else if (20.8 <= speed && speed <= 24.4) {
        return 'шторм';
    } else if (24.5 <= speed && speed <= 32.6) {
        return 'дуже сильний шторм';
    } else if (speed => 32.7) {
        return 'ураган !';
    } else {
        return '';
    }
}

export default calcWindGust;