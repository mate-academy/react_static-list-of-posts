import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__name">{comment.name}</h3>
    <p className="comment__email">{comment.email}</p>
    <p className="comment__text">{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.shape.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
