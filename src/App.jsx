import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Landing from './component/Landing'
import AboutUs from './component/AboutUs'
import BestProducts from './component/BestProducts'

function App() {

  return (
    <div className='overflow-hidden'>
      <Landing></Landing>
      <AboutUs></AboutUs>
      <BestProducts></BestProducts>
    </div>
  )
}

export default App
