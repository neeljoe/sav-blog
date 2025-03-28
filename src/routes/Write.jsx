import React from 'react'
import { useUser } from '@clerk/clerk-react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';


const Write = () => {
  const {isLoaded, isSignedIn} = useUser()
  if (!isLoaded) { 
    return <div> Loading ...</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div> Please sign in to write a post</div>
  }

    return (
    <div className='h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 '>  
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a Cover Image</button>
        <input type="text" placeholder="My Awesome Story" className='text-4xl font-semibold outline-none bg-transparent'/>
        <div className='flex gap-4 items-center'>
          <label htmlFor="" className='text-sm '>Choose a category</label>
          <select name="cat" id="" className='rounded-xl bg-white shadow-md p-2 text-sm '>
            <option value="general">General</option>
            <option value="fashion">Fashion</option>
            <option value="lifestyle">LifeStyle</option>
            <option value="health">Health</option>
            <option value="career">Career</option>
            <option value="travel">Travel</option>
          </select>
        </div>
       <textarea placeholder="Tell your story..." className='rounded-xl bg-white shadow-md p-4 text-sm ' />
        <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white shadow-md text-sm'/>
        <button className='bg-rose-500 rounded-xl mt-4 px-8 py-2 font-medium text-white w-max cursor-pointer hover:bg-rose-600 transition-all ease-in-out'>Send</button>
      </form>
    </div>
  )
}

export default Write