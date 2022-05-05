
import { useState } from 'react';
import './App.css';

import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const [mode , setMode]= useState("light")
  

  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      
  }
  else {
      setMode("light")
      document.body.style.backgroundColor="white"
   
  }
}
  return (
    <div>
    <Router>
<Navbar mode={mode} toggleMode={toggleMode} />
<div className='container my-4'>
       <Routes>
       <Route path="/" element={<Textform heading='Enter Text Here' mode={mode}></Textform>} />
       <Route path="/about" element={<About />} />
     </Routes>
     </div>
     </Router>

    </div>
  );
}

export default App;
