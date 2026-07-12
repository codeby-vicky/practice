import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Content from './Content'
import Content2 from './Content2'
import Payment from './Payment'
import Pagenotfound from './Pagenotfound'

const App = () => {

  // Cart State
  const [cart, setCart] = useState([]);

  return (
    <div>

      <BrowserRouter>
      
        <Header cart={cart} />

        <Routes>

          <Route path="/" element={<Content />} />

          <Route
            path="/content2"
            element={
              <Content2
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/payment"
            element={
              <Payment
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route path="*" element={<Pagenotfound />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App