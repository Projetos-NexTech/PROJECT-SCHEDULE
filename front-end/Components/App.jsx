import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '/src/styles/App.css'
import Login from "../src/pages/login";
import Cadastro from "../src/pages/cadastro.jsx";
import Redefinir_senha from '../src/pages/redefinir-senha.jsx';
import Home from '../src/pages/home.jsx';


function App() {

  return (  
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir-senha" element={<Redefinir_senha />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </BrowserRouter> 
  

  )
}


export default App
