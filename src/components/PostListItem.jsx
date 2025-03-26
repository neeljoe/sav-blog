import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
const PostListItem = ({id, title, date, author, text, img, category}) => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 '>  
        {/* image */}
        <div className='md:hidden xl:block lg:w-1/3'>
        <Image src={img} className="rounded-xl object-cover" w="740" />
        </div>
        {/* details */}
        <div className='flex flex-col gap-4 lg:w-2/3 lg:py-8'>
            <Link to="/test" className='text-4xl font-semibold'>{title} </Link>
            <div className='flex items-center gap-2 '>
                <span>Written by</span>
                <Link className='text-blue-500'>{author}</Link>
                <span>on</span>
                <Link className='text-blue-500'>{category}</Link>
                <span>{date}</span>
            </div>
            <p>{text}</p>
                  <Link to="/test" className='text-blue-400'>Read more</Link>
        </div>
       
    </div>
  )
}

export default PostListItem