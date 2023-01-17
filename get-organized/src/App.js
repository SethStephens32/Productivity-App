import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation/Navigation.component';
import Home from './pages/Home/Home.component';
import './index.scss';
import Dashboard from './pages/Dashboard/Dashboard.component';
import Particle from './components/Particles/Particles.component';

function App() {
  return (
    <>
      <Particle/>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
