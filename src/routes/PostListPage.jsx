import React from 'react'
import TravelList from '../components/TravelList'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'

const PostListPage = () => {
  return (
    <div className='my-5'>
     <div className="breadcrumbs text-xl mb-6">
      <ul>
        <li ><Link to="/" className='hover:text-rose-600 transition-all ease-in-out'>Blogs</Link></li>
        <li className='text-blue-500'>Travel Blogs</li>
      </ul>
    </div>
      <div className='flex gap-8'>
        <div className=''>
          <TravelList />
        </div>
        <div className=''>
          <SideMenu />
        </div>

      </div>
    </div>
  )
}

export default PostListPage