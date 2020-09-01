import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <div>
    <div>{comment.name}</div>
    <a href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <div>{comment.body}</div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
