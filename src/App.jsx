import { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductPage from "./components/Product/ProductPage";
import CartContext from "./context/CartContext";

function App() {

  const { productId } = useContext(CartContext)
 

  return (
    <>
      <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />

            <Route
              path="/productPage"
              element={
                productId ? (
                  <ProductPage productId={productId} />
                ) : (
                  <Navigate to="/product" />
                )
              }
            />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
