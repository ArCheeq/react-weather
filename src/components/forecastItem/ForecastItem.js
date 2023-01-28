import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import styled from '@emotion/styled';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/slices/popupSlice/popupSlice';

const StyledCard = styled(Card)(({theme}) => ({
    "backgroundColor": `${theme.palette.mode === 'dark' ? "#2E3035" : "rgba(71, 147, 255, 0.2)"}`,
    "transition": "all .3s ease-in-out",
    "borderRadius": "10px",
    "boxShadow": "none",
    "padding": "11px",
    "maxWidth": "150px",
    "width": "100%",
    "cursor": "pointer",
    ":hover": {
        "boxShadow": "2px 5px 25px -3px rgba(180, 180, 180, 0.25)",
    }
}));

const ForecastItem = ({svgId, day, weekDay, tempMax, tempMin, weatherType, datetime}) => {
    const dispatch = useDispatch();

    return (
        <StyledCard onClick={() => {dispatch(togglePopup(datetime))}}>
            <CardContent>
                <Typography sx={{fontWeight: 500, fontSize: "1.125rem", mb: "7px"}}>{weekDay}</Typography>
                <Typography sx={{fontSize: "0.875rem", color: "#939CB0", mb: "12px"}}>{day}</Typography>
                <CardMedia>
                    <GlobalSvgSelector id={svgId} width="48px" height="48px" sx={{mb: "12px"}}/>
                </CardMedia>
                <Typography sx={{fontWeight: 500, fontSize: "1.3rem"}}>{tempMax}°</Typography>
                <Typography sx={{fontSize: "1rem", color: "#939CB0"}}>{tempMin}°</Typography>
                <Typography sx={{fontSize: "0.75rem", color: "#939CB0"}}>{weatherType}</Typography>
            </CardContent>
        </StyledCard>
    )
}

export default ForecastItem;