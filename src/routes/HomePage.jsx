import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'

const HomePage = () => {
  return (
    <> 
    {/* Breadcrumbs */}
<div className="breadcrumbs text-sm">
  <ul>
    <li ><Link to="/" className='hover:text-rose-600 transition-all ease-in-out'>Home</Link></li>
    <li className='text-gray-500'>Blogs and Articles</li>
  </ul>
</div>
    {/* Introduction */}
    {/* intro title */}
    <div className='flex items-center justify-between '>
      <div >
        <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold' >Discover Your Style</h1>
        <p className='mt-4 text-md md:text-xl'>Dive into a world where your style reflects your
           unique self, your lifestyle blossoms with vibrant
            experiences.</p>

      </div>
       {/* intro button */}
       <Link to="/write">
       <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
            // className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text className='fill-current text-rose-600' >
              <textPath href="#circlePath" startOffset="0%">
               ••News•• Latest blogs •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
               ••News•• Latest blogs •
              </textPath>
            </text>
          </svg>
       </Link>

    </div>

   {/* categories */}
   <MainCategories />
    {/* Featured Posts */}
    <FeaturedPosts />
    {/* Post list */}
    <div className="divider mt-8"></div>
    <div className=''>
      <h1 className='mt-20 text-2xl mb-8'>Recent Posts</h1>
      <PostList />
    </div>
    
    
    </>
    
 
     
   
  )
}

export default HomePage