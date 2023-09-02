import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import QuoteDisplay from './Components/QuoteDisplay';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuoteDisplay />} />
    </Routes>
  </div>
);

export default App;
