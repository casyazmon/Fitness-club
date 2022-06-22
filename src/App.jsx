import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App