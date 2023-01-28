import { useDispatch, useSelector } from 'react-redux';
import { changeForecastPeriod } from '../../store/slices/forecastPeriodSlice/forecastPeriodSlice';

import Forecast from '../forecast/Forecast';

import { Box } from '@mui/material';

import { TabsUnstyled, TabsListUnstyled, TabPanelUnstyled, TabUnstyled } from '@mui/base';
import { tabUnstyledClasses } from '@mui/base';
import styled from '@emotion/styled';

const Tab = styled(TabUnstyled)(({theme}) => `
  font-family: 'Montserrat';
  color: ${theme.palette.mode === 'dark' ? "#fff" : "#000"} ;
  cursor: pointer;
  font-size: 1.125rem;
  background-color: ${theme.palette.mode === 'dark' ? "#4F4F4F" : "#fff"};
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .3s ease-in-out;

  &.${tabUnstyledClasses.selected} {
    background-color: #4793FF;
    color: #fff;
  }

`);

const TabsList = styled(TabsListUnstyled)`
  display: flex;
  gap: 15px;
  align-items: center
`;


const Tabs = () => {
    const forecastPeriod = useSelector(state => state.forecastPeriod.forecastPeriod)
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(changeForecastPeriod(value))
    }

    return (
        <Box sx={{ width: '100%', mt: "50px"}}>
            <TabsUnstyled defaultValue={7} value={forecastPeriod} onChange={handleChange}>
              <TabsList>
                <Tab value={7}>For week</Tab>
                <Tab value={10}>For 10 days</Tab>
                <Tab value={30}>For month</Tab>
              </TabsList>
              <TabPanelUnstyled value={7}>
                <Forecast />
              </TabPanelUnstyled>
              <TabPanelUnstyled value={10}>
                <Forecast />
              </TabPanelUnstyled>
              <TabPanelUnstyled value={30}>
                <Forecast />
              </TabPanelUnstyled>
            </TabsUnstyled>
        </Box>
    )
}

export default Tabs;