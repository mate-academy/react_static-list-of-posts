import React from 'react';
import Comment from './Comment';

function CommentList({comments}) {
  // console.log(comments)
  return (
    <div>{comments.map(comment => <Comment comment={comment} />)}</div>
  )
}

export default CommentList
