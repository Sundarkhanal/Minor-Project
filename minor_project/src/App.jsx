import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Product from './components/Pages/Product'
import Contact from './components/Pages/Contact'


const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div className= {`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme}/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
        
    </div>
    
  )
}

export default App

