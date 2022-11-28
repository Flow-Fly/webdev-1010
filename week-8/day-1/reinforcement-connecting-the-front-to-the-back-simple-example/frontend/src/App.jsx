import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5005/api").then(({ data }) => { setMessage(data.message) });
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  )
}

export default App
