import React from 'react';
import HomePage from './Pages/HomePage';
import Header from './Components/Navbar';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import WishListPage from './Pages/WishListPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
