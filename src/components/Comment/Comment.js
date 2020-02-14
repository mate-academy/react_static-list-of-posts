import React from 'react';
import PropTypes from 'prop-types';

export const commentTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export const Comment = ({ comment }) => (
  <li>
    <p>{`Comment: ${comment.name}`}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </li>
);

Comment.propTypes = commentTypes.isRequired;
