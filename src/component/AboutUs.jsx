import React from 'react'
import Nutribullet from '../assets/nutribullet1.png'
import Fan from '../assets/fan.png'
import Clock from '../assets/clock.png'
import Clean from '../assets/clean.png'
import Volt from '../assets/volt.png'
import AOS from 'aos'

function AboutUs() {
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
    <div className='my-10 flex justify-center content-center flex-col'>
        <h1 data-aos="fade-up" className='text-center text-5xl font-body font-semibold px-4 text-hardbluegray'>WHY ARE WE THE BEST?</h1>
    <div className='mt-6 flex justify-around items-center max-[640px]:flex-col'>
        <div data-aos="fade-right" className='w-1/2 flex justify-center content-center px-6'>
            <img className='w-64' src={Nutribullet} alt="" />
        </div>
        <div  className=' w-3/4 grid px-8 gap-6 grid-cols-2 max-[1200px]:grid-cols-1 max-[640px]:my-6'>
            <div data-aos="fade-up" data-aos-duration="500" className=' text-center flex justify-items-center flex-col items-center'>
                <img className='mb-2 w-20' src={Fan} alt="" />
            <h1 className='text-hardbluegray text-xl font-body font-semibold' >Only with nutribullet®.</h1>
                <p className='w-80'>Bullet Blender® blades are designed for nutrient extraction, which transforms ordinary food into superfood.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" className=' text-center  flex justify-items-center flex-col items-center'>
                <img className='mb-2' src={Clean} alt="" />
            <h1 className='text-hardbluegray text-xl font-body font-semibold'>Cleans like a dream.</h1>
                <p className='w-80'>Simply twist off the blades, rinse with soap and water, and put the cups on the top rack of the dishwasher. That's health without the hassle.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="700" className=' text-center  flex justify-items-center flex-col items-center'>
                <img className='mb-2' src={Clock} alt="" />
            <h1 className='text-hardbluegray text-xl font-body font-semibold'>Nutrition in no time.</h1>
                <p className='w-80'>Did you know most smoothies can be made in under 60 seconds? Now you can fit healthful nutrition into your busy day!</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" className='text-center  flex justify-items-center flex-col items-center'>
                <img className='mb-2' src={Volt} alt="" />
            <h1 className='text-hardbluegray text-xl font-body font-semibold'>Power your day.</h1>
                <p className='w-80'>600 watts of power in the original nutribullet blender turns anything from strawberries to spinach into smooth, sippable nutrition</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs