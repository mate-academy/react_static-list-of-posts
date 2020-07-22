import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment }) => (
  <>
    <h3 className="comment__title">{comment.name}</h3>
    <p className="comment__text">{comment.body}</p>
    <p className="comment__email">{comment.email}</p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
