import React, { useState } from 'react'
import ChangeUser from './ChangeUser'
import Increment from './Increment'
import FormHandling from './FormHandling'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Hero from './components/Hero'

const App = () => {

  return (
    <div>
      {/* <ChangeUser/>
      <Increment/> */}
      {/* <FormHandling/> */}
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App