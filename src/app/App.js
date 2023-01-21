import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import s from './app.module.scss';

import Header from '../components/header/Header';
import Home from '../Pages/Home/Home';
import MonthStatistics from '../Pages/MonthStatistics/MonthStatistics';
import Popup from '../components/popup/Popup';

function App() {
  return (
    <div className={s.app}>
      {/* <Popup /> */}
        <Header/>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/month-statistics' element={<MonthStatistics/>}/>
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
