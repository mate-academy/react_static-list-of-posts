import React from 'react';
import './Comment.scss';
import propTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <div className="name">{comment.name}</div>
    <div className="email">{comment.email}</div>
    <div className="comment-body">{comment.body}</div>
  </>
);

Comment.propTypes = {
  comment: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
  }).isRequired,
};
