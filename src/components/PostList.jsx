import React from 'react'
import PostListItem from './PostListItem'
import postData from '../data/post'


const PostList = () => {
  return (
    <div className='flex flex-col gap-8 mb-5'>
       
      {postData.map((post) => (
        <>
          <PostListItem
          key={post.id}
          title={post.title}
          date={post.date}
          author={post.author}
          category={post.category}
          text={post.text}
          img={post.img}
        />
        <div className="divider p-0 m-0"></div>
        </>
      ))}
    
      
    </div>
  )
}

export default PostList