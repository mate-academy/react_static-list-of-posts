import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment_header">
        <h4>{comment.name}</h4>
        <p>{comment.email}</p>
      </div>
      <p>{comment.body}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Comment;
