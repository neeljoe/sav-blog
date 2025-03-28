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
    <div className='h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 mt-15'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form className='flex flex-col gap-6'>
        <button className='btn w-auto'>Add a Cover Image</button>
        <input type="text" placeholder="My Awesome Story" />
        <div>
          <label htmlFor="">Choose a category</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="fashion">Fashion</option>
            <option value="lifestyle">LifeStyle</option>
            <option value="health">Health</option>
            <option value="career">Career</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <textarea name="desc" placeholder='A Short Description' />
        <ReactQuill theme="snow" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Write