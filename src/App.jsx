import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes ,Route } from "react-router"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Login from './pages/Login'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App