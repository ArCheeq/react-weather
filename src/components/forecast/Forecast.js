import s from './forecast.module.scss';

import { nanoid } from '@reduxjs/toolkit';

import ForecastItem from '../forecastItem/ForecastItem';
import Tabs from '../tabs/Tabs';

const Forecast = () => {
    const items = [
        {weekDay: 'Сегодня', day: '28 авг', icon_id: 'rain', tempAverage: '+18°', tempMin: '+15°', weatherType: 'Облачно'},
        {weekDay: 'Завтра', day: '28 авг', icon_id: 'rain', tempAverage: '+15°', tempMin: '+15°', weatherType: 'Небольшой дождь'},
        {weekDay: 'Пн', day: '28 авг', icon_id: 'rain', tempAverage: '+18°', tempMin: '+15°', weatherType: 'Облачно'},
        {weekDay: 'Вт', day: '28 авг', icon_id: 'rain', tempAverage: '+18°', tempMin: '+15°', weatherType: 'Облачно'},
        {weekDay: 'Ср', day: '28 авг', icon_id: 'rain', tempAverage: '+18°', tempMin: '+15°', weatherType: 'Облачно'},
        {weekDay: 'Чт', day: '28 авг', icon_id: 'rain', tempAverage: '+18°', tempMin: '+15°', weatherType: 'Облачно'},
        {weekDay: 'Пт', day: '28 авг', icon_id: 'rain', tempAverage: '+18°', tempMin: '+15°', weatherType: 'Облачно'}
    ]

    const renderItems = (array) => {
        if (array.length === 0) {
            return null;
        } else {
            return array.map((item) => <ForecastItem 
                key={nanoid()}
                weekDay={item.weekDay}
                day={item.day}
                id={item.icon_id}
                tempAverage={item.tempAverage}
                tempMin={item.tempMin}
                weatherType={item.weatherType}/> )
        }
    }

    const elements = renderItems(items);
    return (
        <>
            <Tabs />
            <div className={s.forecast}>
                <div className={s.forecast__items}>
                    {elements}
                </div>
            </div>
        </>
    )
}

export default Forecast;