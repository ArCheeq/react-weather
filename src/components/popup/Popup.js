import ThisDayItem from '../thisDayItem/ThisDayItem';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import { nanoid } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/slices/popupSlice/popupSlice';

import { useSelector } from 'react-redux';
import popupSelector from '../../store/selectors/popupSelector';

import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

import useDataTime from '../../hooks/useDataTime';

import { useEffect } from 'react';

const Blur = styled(Box)(() => ({
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 500,
    height: "100vh",
    width: "100%",
    background: "rgba(0, 0, 0, 0.25)"
}));

const PopupCard = styled(Box)(({theme}) => ({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px",
    maxWidth: "750px",
    width: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#4f4f4f" : "#fff",
    boxShadow: "2px 5px 25px -3px rgba(180, 180, 180, 0.25)",
    borderRadius: "20px",
    transition: "all .3s ease-in-out"
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    transition: "all .3s ease-in-out"
}));

const Popup = () => {
    const dispatch = useDispatch();

    const {dayForecast} = useSelector(popupSelector)
    const currentCity = useSelector(state => state.currentCity.currentCity);

    const {getDay, getDate} = useDataTime();

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';

        return () => {document.querySelector('body').style.overflow = 'auto';}
    }, [])


    const items = [
        {icon_id: 'temperature', label: 'Temperature', value: `${dayForecast.temp}° feels like ${dayForecast.feels_like}°`},
        {icon_id: 'pressure', label: 'Pressure', value: `${dayForecast.pressure} mm of mercury column`},
        {icon_id: 'precipitation', label: 'Precipitation', value: `${dayForecast.precipitation ? dayForecast.precipitation + " mm" : "No precipitation"}`},
        {icon_id: 'wind', label: 'Wind', value: `${dayForecast.windspeed} m/s ${dayForecast.winddir} - ${dayForecast.windgust}`}
    ];

    return (
        <>
            <Blur/>
            <PopupCard>
                <Box sx={{maxWidth: "240px", width: "100%"}}>
                    <Typography sx={{fontSize: "3.75rem", fontWeight: 500, color: "#4793FF", lineHeight: 1}}>{dayForecast.temp}°</Typography>
                    <StyledTypography sx={{fontSize: "25px"}}>
                        {getDay(dayForecast.datetime)}
                    </StyledTypography>
                    <Typography sx={{fontSize: "0.9rem", color: "#939CB0"}}>
                        {getDate(dayForecast.datetime)}
                    </Typography>
                    <GlobalSvgSelector id={'rain'}  width="60px" height="60px"/>
                    <Typography sx={{fontSize: "0.9rem", color: "#939CB0"}}>
                        City: <span>{currentCity}</span>
                    </Typography>
                    <Typography sx={{fontSize: "0.9rem", color: "#939CB0"}}>
                        {dayForecast.description}
                    </Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", gap: "24px", maxWidth: "400px", width: "100%"}}>
                    {items.map((item) => <ThisDayItem key={nanoid()} id={item.icon_id} label={item.label} value={item.value}/> )}
                </Box>
                <Box sx={{position: "absolute", top: "15px", right: "15px", cursor: "pointer"}} onClick={() => dispatch(togglePopup())}>
                    <GlobalSvgSelector id={'close'} width="18px" height="18px"/>
                </Box>
            </PopupCard>
        </>
    )
}

export default Popup;