
const useDataTime = () => {

    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: "Friday",
        6: 'Saturday'
    }

    const months = {
        0: "January", 
        1: "February", 
        2: "March", 
        3: "April",
        4: "May",
        5: "June",
        6: "July", 
        7: "August", 
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    const getDay = (date = null) => {
        const time = !date ? new Date() : new Date(date);
        const day = time.getDay(time);
        return days[day];
    }

    const getDate = (date) => {
        const time = new Date(date);
        const day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
        const month = time.getMonth();
        return `${day} ${months[month]}`;
    }
    
    const getDayTimezone = (sunrise, sunset) => {
        const time = new Date().getTime();

        if (time >= sunrise && time < sunset) {
            return 'day';
        } else {
            return 'night';
        }
    }

    const getForecastPeriod = (period) => {
        const today = new Date();
        const start_date = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        const start_date_day = start_date.getDate(); 
        const start_date_month = start_date.getMonth() + 1; //в js месяц отсчитывается с нуля
        const start_date_year = start_date.getFullYear();

        const end_date = new Date(today.getTime() + (period * 24 * 60 * 60 * 1000));
        const end_date_day = end_date.getDate(); 
        const end_date_month = end_date.getMonth() + 1; //в js месяц отсчитывается с нуля
        const end_date_year = end_date.getFullYear();

        return [`${start_date_year}-${start_date_month < 10 ? "0" + start_date_month : start_date_month}-${start_date_day < 10 ? "0" + start_date_day : start_date_day}`, 
                `${end_date_year}-${end_date_month < 10 ? "0" + end_date_month : end_date_month}-${end_date_day < 10 ? "0" + end_date_day : end_date_day}`];
    }

    return {getDay, getDayTimezone, getForecastPeriod, getDate}
}

export default useDataTime;