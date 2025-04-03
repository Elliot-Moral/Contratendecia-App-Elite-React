import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//=== stiles ===
import './App.css'

//=== componentes ===
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react" element={<HomePage />} />
        <Route path="/suscribe" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
