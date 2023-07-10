import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'


//Componets
import { Detail, Form, Home, LandingPage } from './componets/viewns'
import { NavBar } from './componets'

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/create' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
