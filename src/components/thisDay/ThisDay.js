import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Spinner from '../spinner/Spinner';

import { useSelector } from 'react-redux';
import currentWeatherSelector from '../../store/selectors/currentWeatherSelector';

import Moment from 'react-moment';

import calcSvgId from '../../model/calcSvgId';
import useDataTime from '../../hooks/useDataTime';

import { Box, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)(({theme}) => ({
    "backgroundColor": `${theme.palette.mode === 'dark' ? "#4f4f4f" : "#fff"}`,
    "transition": "all .3s ease-in-out",
    "maxWidth": "400px", 
    "width": '100%', 
    "borderRadius": "20px", 
    "padding": "20px", 
    "position": 'relative', 
    "boxShadow": "2px 5px 25px -3px rgba(180, 180, 180, 0.25)"
}));

const ThisDay = () => {
    const {weather, weatherLoadingStatus} = useSelector(currentWeatherSelector);
    const theme = useSelector(state => state.theme.theme);

    const {getDay, getDayTimezone} = useDataTime();

    const day = getDay();
    const dayTimezone = getDayTimezone(weather.sys.sunrise, weather.sys.sunset);

    return (
        <StyledPaper>
            {weatherLoadingStatus === 'loading' ? <Spinner theme={theme}/> :
            <>
                <Box>
                    <Typography sx={{fontWeight: 500, fontSize: "96px", lineHeight: 1.2, color: "#4793FF"}}>{`${weather.temp}°`}</Typography>
                    <Typography sx={{fontSize: "2.5rem", mb: "30px"}}>{day}</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontSize: "1.5rem", color: "#939CB0"}}>
                        Time: <Moment format="HH:mm" interval={1000} />
                    </Typography>
                    <Typography sx={{fontSize: "1.5rem", color: "#939CB0"}}>
                        City: <span>{weather.cityName}</span>
                    </Typography>
                </Box>
                <Box sx={{position: "absolute", top: "46px", right: "20px"}}>
                    <GlobalSvgSelector id={calcSvgId(weather.type.id, dayTimezone)} width="119px" height="119px"/>
                </Box>
            </>}
        </StyledPaper>
    )
}

export default ThisDay;