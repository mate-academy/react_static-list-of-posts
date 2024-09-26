import React from 'react';

function Comment(props) {
  const comment = props.comment;
  return (
    <div>
      <h4>{comment.name}</h4>
      <a href="#">{comment.email}</a>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment;