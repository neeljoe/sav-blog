import React from 'react'
import TravelList from '../components/TravelList'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'


const PostListPage = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className='my-5'>
     <div className="breadcrumbs text-xl mb-6">
      <ul>
        <li ><Link to="/" className='hover:text-rose-600 transition-all ease-in-out'>Blogs</Link></li>
        <li className='text-blue-500'>Travel Blogs</li>
      </ul>
    </div>
    <button onClick={() => setOpen((prev) => !prev)} className='bg-rose-500 text-white text-sm px-4 py-2 rounded-2xl hover:bg-rose-600 cursor-pointer md:hidden mb-4'>
      {open ? "close" : "Filter & Search"}</button>
      <div className='flex flex-col-reverse md:flex-row gap-8'>
        <div className=''>
          <TravelList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </div>

      </div>
    </div>
  )
}

export default PostListPage