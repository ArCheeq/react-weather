import s from './thisDay.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import { useSelector } from 'react-redux';
import currentWeatherSelector from '../../store/selectors/currentWeatherSelector';

import Moment from 'react-moment';

import calcSvgId from '../../model/calcSvgId';
import useDataTime from '../../hooks/useDataTime';

const ThisDay = () => {
    const {weather, weatherLoadingStatus} = useSelector(currentWeatherSelector);

    const {getDay, getDayTimezone} = useDataTime();

    const day = getDay();
    const dayTimezone = getDayTimezone(weather.sys.sunrise, weather.sys.sunset);

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.temperature}>{`${weather.temp}°`}</div>
                <div className={s.day}>{day}</div>
            </div>
            <div className={s.bot__block}>
                <div className={s.time}>
                    Час: <Moment format="HH:mm" interval={1000} />
                </div>
                <div className={s.city}>
                    Місто: <span>{weather.cityName}</span>
                </div>
            </div>

            <GlobalSvgSelector className={s.weather} id={calcSvgId(weather.type.id, dayTimezone)}/>
        </div>
    )
}

export default ThisDay;