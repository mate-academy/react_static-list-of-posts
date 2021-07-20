import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <div>
    <h2>{comment.name}</h2>
    <a href={`mailto:${comment.email}`}>{comment.email}</a>
    <p>{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
