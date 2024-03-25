// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Seller from "../screens/Seller";
import Layout from "../components/Layout";
import SalonService from "../screens/SalonService";
import Home from "../screens/Home";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/Service" element={<SalonService />} />
        {/* Add more routes as needed */}
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
