import s from './popup.module.scss';

import ThisDayItem from '../thisDayItem/ThisDayItem';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

const Popup = () => {
    const items = [
        {icon_id: 'temperature', label: 'Температура', value: '20° - ощущается как 17°'},
        {icon_id: 'pressure', label: 'Давление', value: '765 мм ртутного столба - нормальное'},
        {icon_id: 'precipitation', label: 'Осадки', value: 'Без осадков'},
        {icon_id: 'wind', label: 'Ветер', value: '3 м/с юго-запад - легкий ветер'}
    ];

    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.popup__info}>
                    <div className={s.popup__info__temp}>12°</div>
                    <div className={s.popup__info__day}>Среда</div>
                    <GlobalSvgSelector id={'small_rain_sun'} />
                    <div className={s.popup__info__time}>
                        Время: <span>01:54</span>
                    </div>
                    <div className={s.popup__info__city}>
                        Город: <span>Киев</span>
                    </div>
                </div>
                <div className={s.this__day__info__items}>
                    {items.map((item) => <ThisDayItem id={item.icon_id} label={item.label} value={item.value}/> )}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id={'close'}/>
                </div>
            </div>
        </>
    )
}

export default Popup;