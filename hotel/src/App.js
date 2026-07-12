import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Header"
import AddFood from "./AddFood"
import ReadFood from "./ReadFood"
import UpdateFood from "./UpdateFood"
import Cart from "./Cart"
import PagenotFound from "./PagenotFound"

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Header />} />

          <Route path="/add" element={<AddFood />} />

          <Route path="/read" element={<ReadFood />} />

          <Route path="/update/:id" element={<UpdateFood />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<PagenotFound />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App