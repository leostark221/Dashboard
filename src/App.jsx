// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Sidebar.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="ml-48 ">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
