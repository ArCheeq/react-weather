const calcWindDirection = (deg) => {
    if (deg === 0 || deg === 360) {
        return 'північний';
    } else if (0 < deg && deg < 90) {
        return 'північно-східний';
    } else if (deg === 90) {
        return 'східний';
    } else if (90 < deg && deg < 180) {
        return 'південно-східний';
    } else if (deg === 180) {
        return 'південний';
    } else if (180 < deg && deg < 270) {
        return 'південно-західний';
    } else if (deg === 270) {
        return 'західний';
    } else if (270 < deg && deg < 360) {
        return 'північно-західний';
    } else {
        return 'da'
    }
}

export default calcWindDirection;