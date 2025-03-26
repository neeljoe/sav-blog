import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

const SinglePost = () => {
  return (
    <div className='flex flex-col gap-8 mt-12'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
        <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Meghamalai: Whispers of the Clouds, Secrets of the Hills </h1>
        <div className='flex items-center gap-2 text-sm'>
          <span >Written by</span>
          <Link className='text-blue-500'>Savannah</Link>
          <span >on</span>
          <Link className='text-blue-500'>Travel</Link>
          <span className='font-light'>10 hours ago</span>
        </div>
        <p>Meghamalai, translating to "Mountain of Clouds," is a hidden gem tucked away in the Western Ghats of 
          Tamil Nadu, India. Far from the bustling tourist trails, this serene hill station offers a tranquil 
          escape into nature's embrace. If you're yearning for
           misty landscapes, lush tea plantations, and the symphony of birdsong, Meghamalai is your answer.</p>
        </div>
        <div className='lg:block hidden w-2/5'> 
          <Image 
          src="nature.webp"
          className='rounded-xl'
          w="600"
          />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
      </div>
      

    </div>
  )
}

export default SinglePost