import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation/Navigation.component';
import Home from './pages/Home/Home.component';
import './index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
