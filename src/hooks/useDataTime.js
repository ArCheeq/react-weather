
const useDataTime = () => {

    const days = {
        0: 'Неділя',
        1: 'Понеділок',
        2: 'Вівторок',
        3: 'Середа',
        4: 'Четверг',
        5: "П'ятниця",
        6: 'Субота'
    }

    const getDay = () => {
        const time = new Date();
        const day = time.getDay(time);
        return days[day];
    }
    
    const getDayTimezone = (sunrise, sunset) => {
        const time = new Date().getTime();

        if (time >= sunrise && time < sunset) {
            return 'sun';
        } else {
            return 'moon';
        }
    }

    return {getDay, getDayTimezone}
}

export default useDataTime;