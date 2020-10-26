import React from 'react';

import PropTypes from 'prop-types';

import './comment.scss';

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment__name">{comment.name}</div>
    <div className="comment__email">{comment.email}</div>
    <div className="comment__body">{comment.body}</div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export { Comment };
