import s from './thisDayItem.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

const ThisDayItem = ({id, label, value}) => {
    return (
        <div className={s.this__day__item}>
            <div className={s.this__day__item__icon}>
                <GlobalSvgSelector id={id} />
            </div>
            <div className={s.this__day__item__label}>{label}</div>
            <div className={s.this__day__item__value}>{value}</div>
        </div>
    )
}

export default ThisDayItem;