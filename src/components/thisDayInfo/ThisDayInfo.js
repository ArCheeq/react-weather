import s from './thisDayInfo.module.scss';
import clouds from '../../assets/images/clouds.png';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import ThisDayItem from '../thisDayItem/ThisDayItem';

import currentWeatherSelector from '../../store/selectors/currentWeatherSelector';

const ThisDayInfo = () => {

    const {weather, weatherLoadingStatus} = useSelector(currentWeatherSelector);

    const items = [
        {icon_id: 'temperature', label: 'Температура', value: `${weather.temp}° - відчувається як ${weather.feelsLike}°`},
        {icon_id: 'pressure', label: 'Тиск', value: `${weather.pressure} мм ртутного стовпа`},
        {icon_id: 'precipitation', label: 'Опади', value: weather.precipitation},
        {icon_id: 'wind', label: 'Вітер', value: `${weather.wind.speed} м/с ${weather.wind.direction} - ${weather.wind.gust}`}
    ];

    const renderItems = (array) => {
        if (array.length === 0) {
            return null;
        } else {
            return array.map((item) => <ThisDayItem key={nanoid()} id={item.icon_id} label={item.label} value={item.value}/> )
        }
    }

    const elements = renderItems(items);
    return (
        <div className={s.this__day__info}>
            <div className={s.this__day__info__items}>
                {elements}
            </div>
            <img src={clouds} alt="clouds" className={s.this__day__img} />
        </div>
    )
}

export default ThisDayInfo;