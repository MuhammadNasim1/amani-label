import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import Products from './pages/Products'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/products" element={<Products/>} />
        <Route path ="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

