import React from 'react';

function Comment({ comment: { name, body, email }}) {
  return (
    <>
      <h4>{name}</h4>
      <h5>{email}</h5>
      <p>{body}</p>
    </>
  );
}

export default Comment;
