import s from './thisDay.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import { useSelector } from 'react-redux';
import currentWeatherSelector from '../../store/selectors/currentWeatherSelector';

import Moment from 'react-moment';

const ThisDay = () => {
    const {weather, weatherLoadingStatus} = useSelector(currentWeatherSelector);

    const time = new Date();
    const day = time.getDay(time);

    const days = {
        0: 'Неділя',
        1: 'Понеділок',
        2: 'Вівторок',
        3: 'Середа',
        4: 'Четверг',
        5: "П'ятниця",
        6: 'Субота'
    }

    const dtime = new Date(1673874026)


    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.temperature}>{`${weather.temp}°`}</div>
                <div className={s.day}>{days[day]}</div>
            </div>
            <div className={s.bot__block}>
                <div className={s.time}>
                    Час: <Moment format="HH:mm" interval={1000} />
                </div>
                <div className={s.city}>
                    Місто: <span>{weather.cityName}</span>
                </div>
            </div>

            <GlobalSvgSelector className={s.weather} id="clear_sky_moon"/>
        </div>
    )
}

export default ThisDay;