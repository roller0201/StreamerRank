import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import './App.css';
import Loading from './components/Loading';
const RankingPage = lazy(() => import('../src/pages/RankingPage'));
const StreamerProfilPage = lazy(() =>
  import('../src/pages/StreamerProfilePage')
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<RankingPage />} />
          <Route
            path='/StreamerProfilPage'
            element={
              <Suspense fallback={<Loading route />}>
                <StreamerProfilPage />
              </Suspense>
            }
          />
          <Route path='*' element={<Navigate replace to='/home' />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
