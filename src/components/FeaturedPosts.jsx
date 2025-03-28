import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom' 

const FeaturedPosts = () => {
  return (
    <div className='mt-16 flex flex-col lg:flex-row gap-8'>
      {/* first */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
      {/* image  */}
         <Image 
         src="featured1.jpeg" className="rounded-3xl" w="895"/>
         {/* details */}
         <div className="flex items-center gap-4">
            <h1 className='font-semibold lg:text-lg'>01.</h1>
            <Link className="lg:text-lg font-semibold" >Home decor</Link>
            <span className='font-extralight'>2days ago</span>
         </div>
        {/* title */}
        <Link to="/test" className='text-xl lg:text-3xl font-semi-bold lg:font-bold'>Elevate Your Space: Ten Essential Home Decor Tips</Link>
        <div className="divider flex lg:hidden"></div>
      </div>
      {/* others */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
      {/* second */}
      <div className="lg:h-1/3 flex justify-between gap-4">
       <div className='w-1/3 aspect-video'>
       <Image
        src="featured2.jpeg"
        className="rounded-3xl object-cover w-full h-full" w="298" />
       </div>
        {/* details and title */}
        <div className="w-2/3  p-1 lg:p-3">
        {/* details */}
        <div className='flex flex-col sm:flex-row gap-1 text-sm lg:text-base mb-4'>
        <div className='flex flex-row gap-2'>
        <h1 className='font-semibold'>02.</h1>
        <Link  className='font-semibold'>Middle-East Biennale</Link>
        </div>
          <span className='text-sm font-light'>3 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Glimplses of Arabian history</Link>
        </div>

      </div>
      {/* third */}
      <div className="lg:h-1/3 flex justify-between gap-4">
      <div className='w-1/3 aspect-video'>
      <Image
        src="featured3.jpeg"
        className="rounded-3xl object-cover w-full h-full" w="298" />
      </div>
          {/* details and title */}
          <div className="w-2/3 p-1 lg:p-3">
           {/* details */}
            <div className='flex flex-col sm:flex-row gap-1 text-sm lg:text-base mb-4'>
            <div className='flex flex-row gap-2'>
            <h1 className='font-semibold'>03.</h1>
            <Link className='font-semibold'>City of fashion </Link>
            </div>
          <span className='text-sm font-light'> 3 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>City Lights  Weekly roundup </Link>
        </div>
      </div>
       {/* fourth */}
       <div className="lg:h-1/3 flex justify-between gap-4">
       <div className='w-1/3 aspect-video'>
       <Image
        src="featured4.jpeg"
        className="rounded-3xl object-cover w-full h-full" w="298" />

       </div>
          {/* details and title */}
          <div className="w-2/3 p-1 lg:p-3">
           {/* details */}
        <div className='flex flex-col sm:flex-row gap-1 text-sm lg:text-base mb-4'>
           <div className='flex flex-row gap-2'>
           <h1 className='font-semibold'>04.</h1>
           <Link className='font-semibold'>Day with lady of art</Link>
           </div>
          <span className='text-sm font-light'>4 days ago</span>

            </div>
            {/* title */}
            <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Classic Roman Art and Myths</Link>
        </div>
      </div>
      </div>

    </div>
  )
}

export default FeaturedPosts