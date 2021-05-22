import React from 'react';
import propTypes from 'prop-types';

function Comment({name, body, email}){
  return (
    <>
      <h4>{name}</h4>
      <p>{body}</p>
      <p>{email}</p>
    </>
  )
};

Comment.propTypes = {
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
}

export default Comment;
