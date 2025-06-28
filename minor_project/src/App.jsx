import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/light_dark';
import { AuthProvider } from './context/Authcontext';
import PrivateRoute from './components/Privateroute';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Product from './components/Pages/Product';
import Contact from './components/Pages/Contact';
import Login_SIgnup from './components/Pages/Login_SIgnup';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login-signup' element={<Login_SIgnup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
