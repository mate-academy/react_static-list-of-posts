import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <p>{comment.body}</p>
      <div className="author">
      <span className="itemTitle">Name: </span>
      <span>{comment.name}, </span> 
      <span className="itemTitle"> e-mail: </span> 
      <span> {comment.email}, </span>  
    </div>
    </div>
  );
}

export default Comment;
