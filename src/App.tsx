import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogInPage } from './components/Login/LogInPage';
import { MainPage } from './components/MainPage/MainPage';
import { SchedulePage } from './components/Schedule/SchedulePage';
import { NotFound } from './components/NotFound/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LogInPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='schedule'
          element={
            <ProtectedRoute>
              <SchedulePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
