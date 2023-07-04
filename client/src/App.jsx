import React from 'react';
import LandingPage from './componets/LandingPage/LandingPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './componets/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
