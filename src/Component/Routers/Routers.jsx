import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import ProductPage from '../Products/ProductPage/ProductPage'

function Routers() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/products/:productID" element={<ProductPage/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default Routers