import React from 'react'
import Comment from './Comment'

function CommentList({currentComments}) {
  return (
    <>
    {currentComments.map(comment => (
      <Comment currentComment={comment}/>
      ))
    }
    </>
  )
}

export default CommentList