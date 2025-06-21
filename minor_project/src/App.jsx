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
      <AuthProvider> {/* ✅ wrap everything inside AuthProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login_SIgnup />} />

            {/* ✅ Protected Routes */}
            <Route
              path='/home'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path='/about'
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path='/product'
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path='/contact'
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
