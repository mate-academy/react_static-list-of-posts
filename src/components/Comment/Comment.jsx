import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <div className="comment-header">
      <p>{comment.name}</p>
    </div>
    <div className="comment-description">
      <p>{comment.body}</p>
    </div>
    <div className="comment-email">
      <p>{comment.email}</p>
    </div>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
