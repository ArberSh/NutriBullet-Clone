import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Landing from './component/Landing'
import AboutUs from './component/AboutUs'

function App() {

  return (
    <div className='overflow-hidden'>
      <Landing></Landing>
      <AboutUs></AboutUs>
      <h1 className='text-4xl'>hi</h1>
      <h1 className='text-4xl'>hi</h1>
      <h1 className='text-4xl'>hi</h1>
      <h1 className='text-4xl'>hi</h1>
      <h1 className='text-4xl'>hi</h1>
    </div>
  )
}

export default App
