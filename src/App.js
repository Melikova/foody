import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from 'pages/Products.js'
import Restaurants from 'pages/Restaurants'
import Dashboard from 'pages/Dashboard'
import Category from 'pages/Category'
import Orders from 'pages/Orders'
import Offer from 'pages/Offer'
import NotFound from 'pages/NotFound'


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App