import React from 'react'
import Comment from './Comment'
import commentsList from '../data/comments'

const CommentParent = () => {
  return (
    <div>
        {commentsList.map((comment) => (
          <Comment key={comment.id} 
          name={comment.name} 
          date={comment.date}
           comment={comment.comment} />
        ))}
        
    </div>
  )
}

export default CommentParent