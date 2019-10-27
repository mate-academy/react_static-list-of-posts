import React from 'react';

function Comment(props) {
  return (
    <>
      <p><strong>{props.name}</strong>: {props.body}</p>
      <hr />
    </>
  )
}

export default Comment;
