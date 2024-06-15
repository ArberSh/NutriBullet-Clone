import React from 'react'

function ContactUs() {
  return (
    <div className=' bg-hardbluegray py-10'>
        <div className=' flex justify-around flex-wrap px-6 max-[640px]:justify-between'>
        <div className='mb-4 text-lightgray'>
            <h1 className='mb-2 text-lg font-semibold'>SHOP</h1>
            <ul className='font-semibold '>
                <li className='cursor-pointer hover:underline'>Personal blenders</li>
                <li className='cursor-pointer hover:underline'>Full-Sized blenders</li>
                <li className='cursor-pointer hover:underline'>All blenders</li>
                <li className='cursor-pointer hover:underline'>magic bullet</li>
                <li className='cursor-pointer hover:underline'>Baby</li>
                <li className='cursor-pointer hover:underline'>Juicers</li>
                <li className='cursor-pointer hover:underline'>Accessories</li>
            </ul>
        </div>
        <div className=' text-lightgray'>
            <h1 className='mb-2 text-lg font-semibold'>LIFESTYLE</h1>
            <ul className='font-semibold'>
                <li className='cursor-pointer hover:underline'>Recipes</li>
                <li className='cursor-pointer hover:underline'>Blog</li>
                <li className='cursor-pointer hover:underline'>Getting started</li>
            </ul>
        </div>
        <div className='mb-4 text-lightgray'>
            <h1 className='mb-2 text-lg font-semibold'>SUPPORT</h1>
            <ul className='font-semibold'>
                <li className=' cursor-pointer hover:underline'>FAQ</li>
                <li className=' cursor-pointer hover:underline'>Order Status</li>
                <li className=' cursor-pointer hover:underline'>Shipping</li>
                <li className=' cursor-pointer hover:underline'>Returns</li>
                <li className=' cursor-pointer hover:underline'>Warranty</li>
                <li className=' cursor-pointer hover:underline'>Contact Us</li>
                <li className=' cursor-pointer hover:underline'>California Proposition 65</li>
                <li className=' cursor-pointer hover:underline'>California Assembly Bill No. 1200</li>
            </ul>
        </div>
        <div className=' text-lightgray'>
            <h1 className='mb-2 text-lg font-semibold'>COMPANY</h1>
            <ul className='font-semibold'>
                <li className=' cursor-pointer hover:underline'>About Us</li>
                <li className=' cursor-pointer hover:underline'>Press</li>
                <li className=' cursor-pointer hover:underline'>Bullet Brands</li>
                <li className=' cursor-pointer hover:underline'>BCRF Partnership</li>
                <li className=' cursor-pointer hover:underline'>Student Discount</li>
                <li className=' cursor-pointer hover:underline'>Sustainability</li>
            </ul>
        </div>
        <div className=''>
            <h1 className='text-lightgray mb-2 text-lg font-semibold'>SUBSCRIBE</h1>
            <h1 className='text-lightgray'>Email</h1>
            <div className='bg-transparent'>
            <input className=' text-lightgray outline-none bg-hardbluegray border-b-2 border-b-lightgray border-hardbluegray' type="text" placeholder='Enter your email address'/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUs