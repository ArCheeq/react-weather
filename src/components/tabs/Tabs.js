import s from './tabs.module.scss';

const Tabs = () => {
    const tabs = [
        {value: 'На неделю'},
        {value: 'На 10 дней'},
        {value: 'На месяц'}
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => <button key={tab.value} className='button'>{tab.value}</button>)}
            </div>
            <button className='button'>Отменить</button>
        </div>
    )
}

export default Tabs;