import React from 'react';

function Comment(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h6>{props.body}</h6>
    </div>
  );
}

export default Comment;
