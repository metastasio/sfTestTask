// import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogInPage } from './components/LogInPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LogInPage />}></Route>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='schedule' element={<SchedulePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
