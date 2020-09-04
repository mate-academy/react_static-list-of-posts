import React from 'react';
import propTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <h4>{name}</h4>
    <span>{email}</span>
    <p>{body}</p>
  </>
);

Comment.propTypes = {
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};

export default Comment;
