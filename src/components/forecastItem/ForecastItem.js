import s from './forecastItem.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

const ForecastItem = ({id, day, weekDay, tempAverage, tempMin, weatherType}) => {
    return (
        <div className={s.forecast__item}>
            <div className={s.forecast__item__weekDay}>{weekDay}</div>
            <div className={s.forecast__item__day}>{day}</div>
            <GlobalSvgSelector id={id}/>
            <div className={s.forecast__item__tempAverage}>{tempAverage}</div>
            <div className={s.forecast__item__tempMin}>{tempMin}</div>
            <div className={s.forecast__item__weatherType}>{weatherType}</div>
        </div>
    )
}

export default ForecastItem;