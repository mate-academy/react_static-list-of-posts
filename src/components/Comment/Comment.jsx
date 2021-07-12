import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="comment">
    <p>{comment.email.toLowerCase()}</p>
    <p>{comment.name}</p>
    <span>{comment.body}</span>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
