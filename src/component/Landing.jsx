import React from 'react'
import Nav from './Nav'
import Juicer from '../assets/Juicer.png'

function Landing() {
  return (
    <div className=' h-screen bg-gradient-to-br from-mediumbluegray from-25% to-darkblue'>
        <Nav></Nav>
        <div className='pt-20 flex justify-around items-start'>
        <div className='p-20 w-1/2'>
        <h1 className=' text-lightbluegray text-8xl font-body font-semibold'>BEST <span className=' text-lightgray'>JUICER</span>  IN THE WORLD</h1>
        <h1 className='mt-4 text-lightgray text-xl font-sans'>The Nutribullet juicer is acclaimed for its compact design, powerful motor, and efficiency in extracting nutrient-rich juice quickly and easily.</h1>
        <button className='mt-10 px-8 py-2 rounded-sm bg-lightgray text-hardbluegray text-xl'>Shop Now</button>
        </div>
        <div>
            <img className='max-[640px]:w-32 max-[1030px]:w-40 w-64 rotate-12' src={Juicer} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Landing