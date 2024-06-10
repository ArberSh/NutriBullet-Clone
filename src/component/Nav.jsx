import React from 'react'
import Nutribullet from '../assets/Nutribullet.png'
import { useEffect,useState } from 'react';

function Nav() {
    const [scroll, setScroll] = useState(false);

    function Scroll() {
        if (window.scrollY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
      }

      useEffect(() => {
        window.addEventListener("scroll", Scroll);
        return () => {
          window.removeEventListener("scroll", Scroll);
        };
      }, []);

  return (
    <nav className={` fixed z-10 flex justify-center items-center h-16  w-full ${ scroll ? `bg-lightgray` : `bg-transparent`} `}>
    <div className=' flex justify-center px-6 '>
        <figure>
            <img className={`w-64 ${scroll ? 'invert' : 'invert-0' }`} src={Nutribullet} alt="" />
        </figure>
    </div>
    <div className='w-full flex justify-center ' >
        <ul className='flex justify-between'>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg `}>Best Seller</li>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg `} >Accessories</li>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg `}>About Us</li>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg `}>Contact</li>
        </ul>
    </div>
    <div className=' flex justify-center w-64 px-4'>
        Shop and Search
    </div>
    </nav>
  )
}

export default Nav