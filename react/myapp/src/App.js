import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Content from './Content'
import Content2 from './Content2'
import Pagenotfound from './Pagenotfound'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Header />} />
        <Route path="/about" element={<Content />}/>
        <Route path="/read" element={<Content2 />}/>
        <Route path='*' element={<Pagenotfound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
