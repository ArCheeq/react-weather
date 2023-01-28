const calcWindDirection = (deg) => {
    if (deg === 0 || deg === 360) {
        return 'northern';
    } else if (0 < deg && deg < 90) {
        return 'northeastern';
    } else if (deg === 90) {
        return 'eastern';
    } else if (90 < deg && deg < 180) {
        return 'southeastern';
    } else if (deg === 180) {
        return 'southern';
    } else if (180 < deg && deg < 270) {
        return 'southwestern';
    } else if (deg === 270) {
        return 'western';
    } else if (270 < deg && deg < 360) {
        return 'northwestern';
    } else {
        return ''
    }
}

export default calcWindDirection;