import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = ({ comment }) => (
  <div className="post__comment comment">
    <h3 className="comment__title">
      {comment.name}
    </h3>
    <p className="comment__text">
      {comment.body}
    </p>
    <span className="comment__email">
      {comment.email}
    </span>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Comment;
