import React, { useState } from 'react'
import ChangeUser from './components/ChangeUser'
import Increment from './components/Increment'
import FormHandling from './components/FormHandling'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AxiosHandling from './components/AxiosHandling'
import RandomProductGenerator from './components/RandomProductGenerator'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App