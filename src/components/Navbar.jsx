import React from 'react'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx"
// import Image from './Image'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full font-bold h-16 md:h-20 flex items-center justify-between'> 
    {/* logo */}
    {/* <Image 
    src='logo.png'
    alt='logo'
    w={40}
    h={40}
    /> */}
    <span className='text-2xl my-logo text-rose-800' >Savannah</span>
    {/* moblieMenu */}
    <div className='md:hidden'>
        {/* moblie button */}
        <div className='text-4xl font-bold text-rose-800' onClick={() => setOpen(prev => !prev)}>
           {open ? <IoCloseOutline />: <RxHamburgerMenu />}
        </div>
        {/* mobile list */}
        <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 
            transition-all ease-in-out gap-8 font-medium text-lg ${ open ? "-right-0" : "-right[100%]"}`} >
          <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Most Popular</a>
        <a href="#">About</a>
        <a href="#">
            <button className='py-2 px-4 rounded-3xl bg-rose-600 text-white'>Log in </button>
        </a>
        </div>
    </div>
    {/* desktopMenu */}
    <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium' >
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Most Popular</a>
        <a href="#">About</a>
        <a href="#">
            <button className='py-2 px-4 rounded-3xl bg-rose-600 text-white'>Log in </button>
        </a>
    </div>

</div>

  )
}

export default Navbar