import React from 'react'
import { comments } from '../resources/comments';

const commentMap = {}
comments.forEach(el => {
  commentMap[el.postId] ? commentMap[el.postId].push(el) : commentMap[el.postId] = [el]
})

function Comment(props) {
  const list = []
  commentMap[props.id].forEach(comment => {
    list.push(
      <div key={comment.id}>
      <h5 className='comment_name' >{comment.name}:</h5>
      <p className='comment_body' >{comment.body}</p>
      </div>
    )
  })
  return (
    <>{list}</>
  )
}

export default Comment;
