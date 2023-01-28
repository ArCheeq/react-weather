
const calcWindGust = (speed) => {
    if (0 <= speed && speed <= 0.2) {
        return 'calm';
    } else if (0.3 <= speed && speed <= 3.3) {
        return 'breeze';
    } else if (3.4 <= speed && speed <= 7.9) {
        return 'moderate wind';
    } else if (8 <= speed && speed <= 13.9) {
        return 'strong wind';
    } else if (14 <= speed && speed <= 20.7) {
        return 'very strong wind';
    } else if (20.8 <= speed && speed <= 24.4) {
        return 'storm';
    } else if (24.5 <= speed && speed <= 32.6) {
        return 'very strong storm';
    } else if (speed => 32.7) {
        return 'hurricane !';
    } else {
        return '';
    }
}

export default calcWindGust;