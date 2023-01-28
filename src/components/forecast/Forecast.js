import { nanoid } from '@reduxjs/toolkit';
import ForecastItem from '../forecastItem/ForecastItem';

import { Paper, Stack } from '@mui/material';

import styled from '@emotion/styled';

import forecastPeriodSelector from '../../store/selectors/forecastPeriodSelector';
import { useSelector } from 'react-redux';

import useDataTime from '../../hooks/useDataTime';

import Spinner from '../spinner/Spinner';

const StyledPaper = styled(Paper)(({theme}) => ({
    "backgroundColor": `${theme.palette.mode === 'dark' ? "#4f4f4f" : "#fff"}`,
    "transition": "all .3s ease-in-out",
    "margin": "10px 0 50px 0", 
    "borderRadius": "0px 0px 20px 20px", 
    "boxShadow": "2px 5px 25px -3px rgba(180, 180, 180, 0.25)",
    "position": "relative"
}));

const Forecast = () => {

    const {weatherForecast, forecastPeriodLoadingStatus} = useSelector(forecastPeriodSelector);
    const theme = useSelector(state => state.theme.theme);

    const {getDay, getDate} = useDataTime();

    const renderItems = (array) => {
        if (array.length === 0) {
            return null;
        } else {
            return array.map((item) => <ForecastItem 
                key={nanoid()}
                svgId={item.icon_id}
                weekDay={getDay(item.datetime)}
                day={getDate(item.datetime)}
                datetime={item.datetime}
                tempMax={item.tempMax}
                tempMin={item.tempMin}
                weatherType={item.description}/>)
        }
    }

    const elements = renderItems(weatherForecast);
    return (
        <StyledPaper elevation={0}>
            <Stack direction="row" sx={{justifyContent: "flex-start", gap: "18px", alignItems: "stretch", flexWrap: "wrap", p: "20px"}}>
                { forecastPeriodLoadingStatus === "loading" ? <Spinner theme={theme} size="big"/> : elements}
            </Stack>
        </StyledPaper>
    )
}

export default Forecast;