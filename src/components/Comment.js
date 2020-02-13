import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <h4 className="caption">{comment.name}</h4>
    <p>{comment.body}</p>
    <p className="email">
commented by:
      {comment.email}
    </p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
