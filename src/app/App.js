import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../Pages/Home/Home';

import { ThemeProvider, createTheme } from '@mui/material';
import { Box } from '@mui/material';

import { useSelector } from 'react-redux';

function App() {

  const theme = useSelector(state => state.theme.theme);
  const mode = createTheme({
    palette: {
      mode: theme,
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      "fontWeightBold": 700,
    }
  })

  return (
    <Box sx={{maxWidth: "1200px", width: "100%", m: "0px auto", pt: "20px"}}>
        <ThemeProvider theme={mode}>
          <Header/>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home/>}/>
              </Routes> 
          </BrowserRouter>
        </ThemeProvider>
    </Box>
  );
}

export default App;
