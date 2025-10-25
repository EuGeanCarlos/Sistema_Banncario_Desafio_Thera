import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";  

import Header from "./components/Header";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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
