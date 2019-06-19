import React from 'react';

function Comment(props) {
  return (
    <div>
      <h3>Comment</h3>
      <p><a href={"mailto:" + props.email}>{props.name}</a></p>
      <p>comment: {props.body}</p>
    </div>
  );
}

export default Comment;
