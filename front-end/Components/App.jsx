import { useEffect, useState } from 'react'
//import reactLogo from '/react.svg'
//import viteLogo from '/vite.svg'
import '/src/styles/App.css'


function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/test") // não precisa colocar localhost:3000
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(err => console.log(err));
  }, []);

  return <div>{msg}</div>;
}


export default App
