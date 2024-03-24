// src/routes/AppRoutes.jsx
import React from "react";
import {  Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Buyer from "../screens/Buyer";
import Home from "../screens/Home";
import Seller from "../screens/Seller";
import Layout from "../components/Layout";
import CryptoExchange from "../screens/CryptoExchange";


const AppRoutes = () => {
  return (
    
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/buyer" element={<Buyer />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/Crypto" element={<CryptoExchange/>} />
      {/* Add more routes as needed */}
    </Routes>
    </Layout>
  );
};

export default AppRoutes;
