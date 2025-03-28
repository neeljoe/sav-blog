import React from 'react'
import { Link } from 'react-router-dom'

const TravelListItem = ({id, title, date, author, text, img, category}) => {
  return (
       <div className='flex flex-col xl:flex-row gap-8 '>  
           {/* image */}
           <div className='md:hidden xl:block lg:w-1/3'>
           <img src={img} className='rounded-xl' />
           </div>
           {/* details */}
           <div className='flex flex-col gap-4 lg:w-2/3 lg:py-8'>
               <Link to="/test" className='text-4xl font-semibold'>{title} </Link>
               <div className='flex flex-col sm:flex-row gap-2 '>
                  <div className='flex gap-2'>
                  <span>Written by</span>
                  <Link className='text-blue-500'>{author}</Link>
                  </div>
                  <div className='flex gap-2'>
                  <span>On</span>
                   <Link className='text-blue-500'>{category}</Link>
                   <span>{date}</span>
                  </div>
               </div>
               <p>{text}</p>
                     <Link to="/test" className='text-blue-400'>Read more</Link>
           </div>
          
       </div>
  )
}

export default TravelListItem