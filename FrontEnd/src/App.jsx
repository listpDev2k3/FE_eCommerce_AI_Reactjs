import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import HistorySearch from "./pages/HistorySearch/HistorySearch";
import AddProduct from "./pages/AddProduct/AddProduct";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/history" element={<HistorySearch />} />
        <Route path="/add-book" element={<AddProduct />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
