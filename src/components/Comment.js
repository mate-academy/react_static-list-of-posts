import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="post__comment">
    <h6>{comment.name}</h6>
    <span>{`(${comment.email})`}</span>
    <p>{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
