import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gestor from "./pages/Gestor";
import Loja from "./pages/Loja";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gestor" element={<Gestor />} />
      <Route path="/loja/:lojaId" element={<Loja />} />
    </Routes>
  );
}
