import s from './home.module.scss';

import ThisDay from '../../components/thisDay/ThisDay';
import ThisDayInfo from '../../components/thisDayInfo/ThisDayInfo';
import Forecast from '../../components/forecast/Forecast';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentWeather } from '../../store/slices/currentWeatherSlice/currentWeatherSlice';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentWeather());
    }, [])

    return (
        <div>
            <div className={s.weather__info}>
                <ThisDay/>
                <ThisDayInfo />
            </div>
            <Forecast />
        </div>
    )
}

export default Home;