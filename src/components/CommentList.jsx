import React from 'react'
import Comment from './Comment'

function CommentList(props) {
  return (
    <>
    {props.comments.map(comment => (
      <Comment comment={comment}/>
      ))
    }
    </>
  )
}

export default CommentList