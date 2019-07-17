import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <span>{comment.email}</span>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default Comment;
