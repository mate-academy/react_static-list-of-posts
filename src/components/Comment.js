import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h3 className="comment__title">{comment.name}</h3>
      <p className="comment__text">{comment.body}</p>
      <p className="comment__autorEmail">
        <i>email</i>
        &nbsp;&nbsp;
        {comment.email}
      </p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
