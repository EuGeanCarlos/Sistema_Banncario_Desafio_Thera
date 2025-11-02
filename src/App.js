import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";  

import Header from "./components/Header";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
