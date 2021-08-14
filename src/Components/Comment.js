import React from 'react';

const Comment = ({ name, body, email }) => (
  <>
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </>    
);

export default Comment;
