import React from 'react'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
        <h1 className='text-xl underline'>Comments</h1>
        <div className='flex items-center justify-between gap-8 w-full'>
            <textarea placeholder='Write a comment..' className='w-full p-4 rounded-xl bg-white'/>
            <button className='px-4 py-2 bg-rose-500 text-white rounded-xl cursor-pointer'>Send</button>
        </div>
    </div>
  )
}

export default Comments