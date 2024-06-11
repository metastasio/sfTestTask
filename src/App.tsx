import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogInPage } from './components/Login/LogInPage';
import { MainPage } from './components/MainPage/MainPage';
import { SchedulePage } from './components/Schedule/SchedulePage';
import { NotFound } from './components/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';

// type RouteProps = {
//   path: string;
//   element: (props?: JSX.Element) => JSX.Element;
// };

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
        {/* <Route path='/' element={<MainPage />}></Route> */}
        {/* <Route path='schedule' element={<SchedulePage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
