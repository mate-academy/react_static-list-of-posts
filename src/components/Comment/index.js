import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <p className="comment__email">{comment.email}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
