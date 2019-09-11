import React from 'react';

import { CommentProps } from '../PropTypes/PropTypes';
import './Comment.css';

const Comment = (comment, email) => (
  <div className="comment-content">
    <h3 className="comment__email">
      {email}
    </h3>
    <p className="comment__text">
      {comment}
    </p>
  </div>
);

Comment.propTypes = CommentProps;

export default Comment;
