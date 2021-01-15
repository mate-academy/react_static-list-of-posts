import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h5 className="comment__name">
      {comment.name}
    </h5>
    <p className="comment__text">
      {comment.body}
    </p>
    <p className="comment__email">
      {comment.email}
    </p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
