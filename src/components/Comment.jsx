import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <ul>
    <li>
      Name:
      {comment.name}
    </li>
    <li>
      Body:
      {comment.body}
    </li>
    <li>
      Email:
      {comment.email}
    </li>
  </ul>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
