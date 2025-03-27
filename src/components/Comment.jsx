import React from 'react'
import Image from './Image'

const Comment = ({name, comment, date}) => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8 lg:w-3/5'>
        <div className='flex items-center gap-4'>
            <Image 
            src="userImg.jpeg"
            className='w-10 h-10 rounded-full object-cover'
            alt='author'
            />
            <span className='font-medium'>{name}</span>
            <span className='text-sm font-light'>{date}</span>
        </div>
        <div>
            <p className='mt-8'>{comment} </p>
            </div>    
    </div>
  )
}

export default Comment