import React from 'react'
import './App.css'
import Header from './Components/header'
import Products from './Components/products'
import Instafeed from './Components/instafeed'
import Newsletter from './Components/newsletter'
import Footer from './Components/footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Products />
      <Instafeed />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
