import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes ,Route } from "react-router"
import Navbar from './components/Navbar/Navbar'
import CartContextProvider from './context/CartContextProvider'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
function App() {

  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
      </CartContextProvider>

    
    </BrowserRouter>
    
    </>
  )
}

export default App
