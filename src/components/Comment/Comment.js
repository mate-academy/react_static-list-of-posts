import React from 'react';
import { commentsShape } from '../../api/preparedPostsShape';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="alert alert-dismissible alert-success">
    <p className="comment-heading">
      Comment
    </p>
    <span className="comment-email">{`Email: ${comment.email}`}</span>
    <br />
    <strong>{comment.name}</strong>
    <br />
    {comment.body}
  </div>
);

Comment.propTypes = {
  comment: commentsShape.isRequired,
};

export { Comment };
