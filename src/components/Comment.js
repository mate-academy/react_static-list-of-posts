import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (

  <div className="comment-list">
    <div>
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
