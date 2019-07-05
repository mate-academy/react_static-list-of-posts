import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment-info">
      {comment.email}
      <blockquote>
        {comment.body}
      </blockquote>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
