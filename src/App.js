import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transacoes from "./pages/Transacoes";
import Transferencia from "./pages/Transferencia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transacoes" element={<Transacoes />} />
        <Route path="/transferencia" element={<Transferencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
