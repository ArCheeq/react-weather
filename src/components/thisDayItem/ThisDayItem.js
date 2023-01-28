import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import { Stack, Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledBox = styled(Box)(({theme}) => ({
    "width": "38px", 
    "height": "38px", 
    "borderRadius": "50%", 
    "boxShadow": "1px 4px 10px -1px rgba(71, 147, 255, 0.2)",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#fff"
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    transition: "all .3s ease-in-out"
}));

const ThisDayItem = ({id, label, value}) => {
    return (
        <Stack direction="row" spacing="20px" sx={{alignItems: "center"}}>
            <StyledBox>
                <GlobalSvgSelector id={id} width="25px" height="25px"/>
            </StyledBox>
            <Typography sx={{fontSize: "0.9rem", color: "#939CB0"}}>{label}</Typography>
            <StyledTypography sx={{fontSize: "0.9rem"}}>{value}</StyledTypography>
        </Stack>
    )
}

export default ThisDayItem;