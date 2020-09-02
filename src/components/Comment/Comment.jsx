import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <div className="comment-item ">
      <span>From: </span>
      <span className="comment-item-name">{comment.name}</span>
    </div>
    <div className="comment-item comment__email">
      {`e-mail: ${comment.email}`}
    </div>
    <div className="comment-item comment__body">
      {`Messege:
        ${comment.body}`}
    </div>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
