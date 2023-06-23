import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
const RankingPage = lazy(() => import('../src/pages/RankingPage'));
const StreamerProfilPage = lazy(() =>
  import('../src/pages/StreamerProfilePage')
);

const App = () => {
  return (
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
  );
};

export default App;
