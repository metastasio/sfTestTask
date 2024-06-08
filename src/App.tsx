import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogInPage } from './components/LogInPage';
import { MainPage } from './components/MainPage';
import { SchedulePage } from './components/SchedulePage';
import { NotFound } from './components/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LogInPage />}></Route>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='schedule' element={<SchedulePage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
