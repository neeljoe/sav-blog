import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className='md:hidden xl:block'>
        <Image src="sunshinenew.webp" className="rounded-2xl object-cover " />
        </div>
        {/* details */}
        <div className='flex flex-col gap-4'>
            <Link to="/test" className='text-4xl font-semibold'>Little Miss SunShine </Link>
            <div className='flex items-center gap-2 '>
                <span>Written by</span>
                <Link className='text-gray-900'>Savannah</Link>
                <span>on</span>
                <Link className='text-gray-900'>Movies to Watch</Link>
                <span>2 days ago</span>
            </div>
            <p>Little Miss Sunshine follows the dysfunctional Hoover family's cross-country road trip to
                 Redondo Beach, California, where their seven-year-old daughter, Olive, hopes to win the
                  Little Miss Sunshine pageant </p>
                  <Link to="/test" className='text-gray-900'>Read more</Link>
        </div>
    </div>
  )
}

export default PostListItem