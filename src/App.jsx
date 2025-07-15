import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header"; // tùy theo bạn để ở đâu
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import HistorySearch from "./pages/HistorySearch/HistorySearch";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/history" element={<HistorySearch />} />
      </Routes>
    </div>
  );
};

export default App;
