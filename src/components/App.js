import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import MonCompte from '../pages/MonCompte';
import Layout from '../pages/Layout';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='game' element={<Game />} />
            <Route path='eshop' element={<Eshop />} />
            <Route path='game' element={<Game />} />
            <Route path='compte' element={<MonCompte />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;




