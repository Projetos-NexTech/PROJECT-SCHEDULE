import { useEffect, useState } from 'react'
//import reactLogo from '/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '/src/styles/App.css'
import Login from "../src/pages/login";
// import Reserva from "../src/pages/reserva";
// import Dashboard from "../src/pages/dashboard";


function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/test") // não precisa colocar localhost:3000
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(err => console.log(err));
  }, []);

  return (<div>  
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/reserva" element={<Reserva />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter> 
  
  </div>
  )
}


export default App
