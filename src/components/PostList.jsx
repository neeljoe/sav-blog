import React from 'react'
import PostListItem from './PostListItem'
import postData from '../data/post'


const PostList = () => {
  return (
    <div className='flex flex-col gap-8 '>
       
      {postData.map((post) => (
        <React.Fragment key={post.id}>
          <PostListItem
          title={post.title}
          date={post.date}
          author={post.author}
          category={post.category}
          text={post.text}
          img={post.img}
        />
       <div className="divider"></div>
        </React.Fragment>
      ))}
    
      
    </div>
  )
}

export default PostList