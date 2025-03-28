import React from 'react'
import { useUser } from '@clerk/clerk-react'

const Write = () => {
  const {isLoaded, isSignedIn} = useUser()
  if (!isLoaded) { 
    return <div> Loading ...</div>
  }
  if (isLoaded && !isSignedIn) {
    return <div> Please sign in to write a post</div>
  }

    return (
    <div>
      <h1>Create a New Post</h1>
      <form>
        <button>Add a Cover Image</button>
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
      </form>
    </div>
  )
}

export default Write