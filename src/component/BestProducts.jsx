import React from 'react'
import Product from './UI/Product'
import Nutribullet from '../assets/Juicer.png'
import NutribulletPro from '../assets/nutribullet1.png'
import NutribulletPro1000 from '../assets/nutribullet2.png'
import NutribulletUltra from '../assets/nutribullet3.png'
import AOS from 'aos'

function BestProducts() {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

  return (
    <div className='py-6 bg-lightgray'>
        <h1 data-aos="fade-up" className=' text-center text-5xl font-body font-semibold px-4 text-hardbluegray'>BEST PRODUCTS</h1>
        <div className='my-12 flex justify-evenly px-10 items-center flex-wrap'>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center px-4'>
                <img className='w-40 mb-4 duration-150 hover:scale-105' src={Nutribullet} alt="" />
            <Product Name="Nutribullet" Description="Meet the original nutribullet, our compact-yet-powerful 600 Watt personal blender. You choose what goes in to get the most out of every ingredient."></Product>
            </div>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center px-4'>
                <img className='w-56 duration-150 hover:scale-105' src={NutribulletPro} alt="" />
            <Product Name="Nutribullet Pro" Description="Meet the Nutribullet Pro, a compact 900-watt blender available in various colors, including exclusive matte editions from our website. Customize your blends to maximize every ingredient’s benefits daily."></Product>
            </div>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center px-4'>
                <img className='w-60 mb-6 duration-150 hover:scale-105' src={NutribulletPro1000} alt="" />
            <Product  Name="Nutribullet Pro+" Description="Meet the nutribullet Pro 1000, our new compact powerhouse blender. With new, ergonomically redesigned blades and cups and a powerful 1000-Watt motor, creating silky-smooth superfood smoothies has never been easier."></Product>
            </div>
            <div data-aos="fade-up" className='flex flex-col justify-center items-center px-4'>
                <img className='w-44 mb-10 duration-150 hover:scale-105' src={NutribulletUltra} alt="" />
            <Product  Name="Nutribullet Ultra" Description="The Nutribullet Ultra, with 1200 watts of power, an intuitive interface, and durable blades, offers quieter operation and sustainable Tritan™ Renew cups. Sleek and powerful, it consistently delivers top-quality blends."></Product>
            </div>
        </div>
    </div>
  )
}

export default BestProducts