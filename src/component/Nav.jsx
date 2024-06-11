import React from 'react'
import Nutribullet from '../assets/Nutribullet.png'
import { useEffect,useState } from 'react';
import Search from '../assets/glass.png'
import ShopBag from '../assets/Shop-Bag.png'
import Menu from '../assets/menu.png'

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
    <nav >
    <div className={`max-[640px]:hidden fixed z-10 flex justify-center items-center h-16  w-full ${ scroll ? `bg-lightgray` : `bg-transparent`} `}>
    <div className=' flex justify-center px-6 '>
        <figure>
            <img className={`w-64 ${scroll ? 'invert' : 'invert-0' }`} src={Nutribullet} alt="" />
        </figure>
    </div>
    <div className='w-full flex justify-center ' >
        <ul className='flex justify-between'>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg cursor-pointer hover:underline`}>Best Seller</li>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg cursor-pointer hover:underline`} >Accessories</li>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg cursor-pointer hover:underline`}>About Us</li>
            <li className={`${scroll ? 'text-hardbluegray' : 'text-lightgray' } mx-4 text-lg cursor-pointer hover:underline`}>Contact</li>
        </ul>
    </div>
    <div className=' flex justify-evenly w-48 px-4'>
        <img src={Search} className={` w-6 cursor-pointer ${scroll ? 'invert' : 'invert-0'}`} alt="" />
        <img src={ShopBag} className={` w-6 cursor-pointer ${scroll ? 'invert' : 'invert-0'}`} alt="" />
    </div>
    </div>
    <div className={`max-[640px]:flex hidden fixed z-10 justify-center items-center h-16  w-full px-4 ${ scroll ? `bg-lightgray` : `bg-transparent`}`}>
        <div className=' w-full '>
            <button>
            <img className={`${scroll ? 'invert' : 'invert-0' } w-8`} src={Menu} alt="" />
            </button>
        </div>
        <div className='w-full'>
            <img className={`${scroll ? 'invert' : 'invert-0' } w-32`} src={Nutribullet} alt="" />
        </div>
        <div className='flex justify-end pl-4 w-full '>
            <img className={`${scroll ? 'invert' : 'invert-0' }  w-6 mx-4`} src={Search} alt="" />
            <img className={`${scroll ? 'invert' : 'invert-0' }  w-6 `} src={ShopBag} alt="" />
        </div>
    </div>
    </nav>
  )
}

export default Nav