import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="comment">
    <h4 className="comment__name">
      {comment.name}
    </h4>
    <div className="comment__email">
      {comment.email}
    </div>
    <p className="comment__body">{comment.body}</p>
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
