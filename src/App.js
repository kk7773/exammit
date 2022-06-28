// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  const [mode, setMode] = useState('light'); //on or off dark mode

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar titel="ExamMit" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer mode={mode} />
      </BrowserRouter>


    </>
  );
}

export default App;
