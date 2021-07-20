import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <div className="callout">
    <h4 className="comment__author">
      {comment.name}
    </h4>
    <p className="comment__body">
      {comment.body}
    </p>
    <span role="img" aria-label="Account icon">📧 </span>
    <a href={`mailto: ${comment.email}`} className="comment__email">
      {comment.email}
    </a>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
