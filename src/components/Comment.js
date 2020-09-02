import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <li>
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <span>{comment.email}</span>
  </li>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
