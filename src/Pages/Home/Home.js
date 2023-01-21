import s from './home.module.scss';

import ThisDay from '../../components/thisDay/ThisDay';
import ThisDayInfo from '../../components/thisDayInfo/ThisDayInfo';
import Forecast from '../../components/forecast/Forecast';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentWeather } from '../../store/slices/currentWeatherSlice/currentWeatherSlice';
import { fetchCitiesList } from '../../store/slices/currentCitySlice/currentCitySlice';

const Home = () => {

    const currentCity = useSelector(state => state.currentCity.currentCity);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentWeather(currentCity));
        dispatch(fetchCitiesList());
    }, [])

    useEffect(() => {
        dispatch(fetchCurrentWeather(currentCity));
    }, [currentCity])

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