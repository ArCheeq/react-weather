import clouds from '../../assets/images/clouds.png';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import ThisDayItem from '../thisDayItem/ThisDayItem';
import Spinner from '../spinner/Spinner';

import currentWeatherSelector from '../../store/selectors/currentWeatherSelector';

import { Paper } from '@mui/material';
import { Stack } from '@mui/system';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)(({theme}) => ({
    "backgroundColor": `${theme.palette.mode === 'dark' ? "#4f4f4f" : "#fff"}`,
    "transition": "all .3s ease-in-out",
    "maxWidth": "750px", 
    "width": '100%', 
    "borderRadius": "20px", 
    "padding": "42px 32px", 
    "position": 'relative', 
    "zIndex": "-1",
    "boxShadow": "2px 5px 25px -3px rgba(180, 180, 180, 0.25)"
}));

const ThisDayInfo = () => {

    const {weather, weatherLoadingStatus} = useSelector(currentWeatherSelector);
    const theme = useSelector(state => state.theme.theme);

    const items = [
        {icon_id: 'temperature', label: 'Temperature', value: `${weather.temp}° feels like ${weather.feelsLike}°`},
        {icon_id: 'pressure', label: 'Pressure', value: `${weather.pressure} mm of mercury column`},
        {icon_id: 'precipitation', label: 'Precipitation', value: weather.precipitation},
        {icon_id: 'wind', label: 'Wind', value: `${weather.wind.speed} m/s ${weather.wind.direction} - ${weather.wind.gust}`}
    ];

    const renderItems = (array) => {
        if (array.length === 0) {
            return null;
        } else {
            return array.map((item) => <ThisDayItem key={nanoid()} id={item.icon_id} label={item.label} value={item.value}/> )
        }
    }

    const elements = useMemo(() => renderItems(items), [weather]);
    return (
        <StyledPaper>
            {weatherLoadingStatus === 'loading' ? <Spinner theme={theme}/> :
                <>
                    <Stack direction="column" spacing="24px">
                        {elements}
                    </Stack>
                    <img src={clouds} alt="clouds" style={{
                        position: "absolute", 
                        top: 0, 
                        right: 0, 
                        zIndex: -5, 
                        borderRadius: "0 20px 0 0"}}
                    />
                </>
            }
        </StyledPaper>
    )
}

export default ThisDayInfo;