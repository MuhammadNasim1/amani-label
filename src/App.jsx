import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/features/CartSlice'
import Shop from './pages/Shop'

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/products" element={<Products/>} />
        <Route path ="/cart" element={<Cart/>} />
        <Route  path="/shop"  element={ <Shop   onAddToCart={(product) => dispatch(addToCart({ ...product, quantity: 1 })) } /> }/>  
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

