// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList'; // Asegúrate de que el archivo exista
import Cart from './pages/CartPage'; // Asegúrate de que el archivo exista
import Admin from './pages/Admin'; // Asegúrate de que el archivo exista
import { ThemeProvider } from '@mui/styles';
import { Switch } from '@mui/material';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" Componentt={CartPage} />
        <Route path="/admin" element={<Admin />} />
      </Switch>
    </Router>
  );
}

export default App;
