import React from 'react';

function Comment(props) {
  return (
    <div className="comment">
      <p>{props.cmnt.body}</p>
      <div className="author">
      <span className="itemTitle">Name: </span>
      <span>{props.cmnt.name}, </span> 
      <span className="itemTitle"> e-mail: </span> 
      <span> {props.cmnt.email}, </span>  
    </div>
    </div>
  );
}

export default Comment;
