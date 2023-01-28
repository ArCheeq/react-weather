import ThisDay from '../../components/thisDay/ThisDay';
import ThisDayInfo from '../../components/thisDayInfo/ThisDayInfo';
import Tabs from '../../components/tabs/Tabs';
import Popup from '../../components/popup/Popup';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentWeather } from '../../store/slices/currentWeatherSlice/currentWeatherSlice';
import { fetchCitiesList } from '../../store/slices/currentCitySlice/currentCitySlice';
import { fetchForecastPeriod } from '../../store/slices/forecastPeriodSlice/forecastPeriodSlice';

import { Stack, Box } from '@mui/material';

import useDataTime from '../../hooks/useDataTime';

const Home = () => {

    const currentCity = useSelector(state => state.currentCity.currentCity);
    const lat = useSelector(state => state.currentCity.lat);
    const lng = useSelector(state => state.currentCity.lng);
    const forecastPeriod = useSelector(state => state.forecastPeriod.forecastPeriod);
    const popup = useSelector(state => state.popup.popup);

    const dispatch = useDispatch();
    const {getForecastPeriod} = useDataTime();

    useEffect(() => {
        dispatch(fetchCitiesList());
    }, [])

    useEffect(() => {
        dispatch(fetchCurrentWeather(currentCity));
        const [start_date, end_date] = getForecastPeriod(forecastPeriod);
        dispatch(fetchForecastPeriod({lat, lng, start_date, end_date}));
    }, [currentCity])

    useEffect(() => {
        const [start_date, end_date] = getForecastPeriod(forecastPeriod);
        dispatch(fetchForecastPeriod({lat, lng, start_date, end_date}));
    }, [forecastPeriod]);

    return (
        <Box>
            {popup ? <Popup/> : null}
            <Stack direction="row" sx={{justifyContent: "space-between"}}>
                <ThisDay/>
                <ThisDayInfo />
            </Stack>
            <Tabs />
        </Box>
    )
}

export default Home;