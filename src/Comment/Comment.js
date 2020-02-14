import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <div className="comments">
    <p>{comment.body}</p>
    <div className="comments-email">
      <p>{comment.name}</p>
      <a href={comment.email}>{comment.email}</a>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
