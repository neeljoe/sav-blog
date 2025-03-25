import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'
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
    <Link to="/" className='text-2xl my-logo text-rose-800' >Savannah</Link>
    {/* moblieMenu */}
    <div className='md:hidden'>
        {/* moblie button */}
        <div className='text-4xl font-bold text-rose-600' onClick={() => setOpen(prev => !prev)}>
           {open ? <IoCloseOutline />: <RxHamburgerMenu />}
        </div>
        {/* mobile list */}
        <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 
            transition-all ease-in-out gap-8 font-medium text-lg ${ open ? "-right-0" : "-right[100%]"}`} >
          <Link to="/" className='hover:text-rose-600 transition-all ease-in-out'>Home</Link>
        <Link to="/"  className='hover:text-rose-600 transition-all ease-in-out'>Trending</Link>
        <Link to="/"  className='hover:text-rose-600 transition-all ease-in-out'>Most Popular</Link>
        <Link to="/"  className='hover:text-rose-600 transition-all ease-in-out'>About</Link>
        <Link to="/"  className='hover:text-rose-600 transition-all ease-in-out'>
            <button className='py-2 px-4 rounded-3xl bg-rose-600 text-white'>Log in </button>
        </Link>
        </div>
    </div>
    {/* desktopMenu */}
    <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium' >
        <Link to="/" className='hover:text-rose-600 transition-all ease-in-out'>Home</Link>
        <Link to="" className='hover:text-rose-600 transition-all ease-in-out'>Trending</Link>
        <Link to="" className='hover:text-rose-600 transition-all ease-in-out'>Most Popular</Link>
        <Link to="" className='hover:text-rose-600 transition-all ease-in-out'>About</Link>
       
         <SignedOut>
           <Link to="/login">
            <button className='py-2 px-4 rounded-3xl bg-rose-600 text-white '>Log in </button>
            </Link>
          </SignedOut >

        <SignedIn>
         <UserButton />
        </SignedIn>
    </div>

</div>

  )
}

export default Navbar