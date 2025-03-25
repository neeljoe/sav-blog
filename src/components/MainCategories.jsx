import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full
    p-4 shadow-lg items-center justify-center mt-4'>
        {/* links */}
          <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className='bg-rose-600 text-white rounded-full px-4 py-2' >All Posts</Link>
            <Link to="/posts?cat=fashion" className='hover:bg-rose-600 hover:text-white rounded-full px-4 py-2' >Fashion</Link>
            <Link to="/posts?cat=career" className='hover:bg-rose-600 hover:text-white rounded-full px-4 py-2' >Career</Link>
            <Link to="/posts?cat=coaching" className='hover:bg-rose-600 hover:text-white rounded-full px-4 py-2' >Coaching</Link>
            <Link to="/posts?cat=finance" className='hover:bg-rose-600 hover:text-white rounded-full px-4 py-2' >Finance</Link>
            <Link to="/posts?cat=lifestyle" className='hover:bg-rose-600 hover:text-white rounded-full px-4 py-2' >Lifestyle</Link>
            <Link to="/posts?cat=freelancing" className='hover:bg-rose-600 hover:text-white rounded-full px-4 py-2' >Freelancing</Link>
          </div>
          <div className="divider divider-horizontal"></div>
        {/* search */}
        <div>
            Search
        </div>
    
    </div>
  )
}

export default MainCategories