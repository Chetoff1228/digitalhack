import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WorkingPage from './components/WorkingPage';
import AboutPage from './components/AboutPage';
import CreatePlantPage from './components/CreatePlantPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/results' element={<WorkingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/plant' element={<CreatePlantPage />} />
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
);

