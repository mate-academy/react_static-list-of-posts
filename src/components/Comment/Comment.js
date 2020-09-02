import React from 'react';
import propTypes from 'prop-types';

const Comment = ({ comment }) => (
  <>
    <h4>{comment.name}</h4>
    <span>{comment.email}</span>
    <p>{comment.body}</p>
  </>
);

Comment.propTypes = {
  comment: propTypes.shape({
    name: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
