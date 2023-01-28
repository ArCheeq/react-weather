import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice/themeSlice';
import { changeCurrentCity } from '../../store/slices/currentCitySlice/currentCitySlice';
import useChangeTheme from '../../hooks/useChangeTheme';
import {storage} from '../../model/storage';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

import { AppBar, Box, Container, Stack, Typography } from '@mui/material';

const Header = () => {
    const cities = useSelector(state => state.currentCity.cities);
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();
    const {changeCssRootVariables} = useChangeTheme();

    const onChangeTheme = () => {
        dispatch(changeTheme());   
    }

    const handleChange = (e) => {
        const payload = {
            value: e.value,
            lat: e.lat,
            lng: e.lng
        };
        dispatch(changeCurrentCity(payload));
    }

    useEffect(() => {
        storage.setItem('theme', theme);
        changeCssRootVariables(theme);
    }, [theme]);

    const renderOptions = (cities) => {
        return cities.map(city => {
            return {value: city.city, label: city.city, lat: city.lat, lng: city.lng }
        });
    }

    const options = useMemo(() => renderOptions(cities), [cities]);


    const colourStyles = {
        control: (styles) => ({
            ...styles,
            fontSize: '16px',
            fontWeight: '500',
            backgroundColor: theme === 'dark' ? '#4F4F4F' : '#DAE9FF',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000',
        })
    }

    return (
        <AppBar color='transparent' position='static' sx={{mb: '30px', boxShadow: 'none'}}>
            <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Stack direction='row' spacing="20px" sx={{alignItems: 'center'}}>
                    <Box>
                        <GlobalSvgSelector id='header__logo' width="65px" height="65px"/>
                    </Box>
                    <Typography variant='h5' sx={{textTransform: 'uppercase', fontWeight: '700', color: "#4793ff"}} >React weather</Typography>
                </Stack>
                <Stack direction="row" spacing="25px" sx={{alignItems: 'center'}}>
                    <Box onClick={onChangeTheme}>
                        <GlobalSvgSelector id='change__theme' width="36px" height="36px"/>
                    </Box>
                    <Select defaultValue={{value: "Kiev", label: "Kiev", lat: "48.0089", lng: "37.8042"}} options={options} styles={colourStyles} onChange={(e) => handleChange(e)}/>
                </Stack>
            </Stack>
        </AppBar>
    )
}

export default Header;