import React from 'react';
import './Comment.css';
import User from '../User/User';

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-header">
      <User user={comment} />
    </div>
    <hr />
    <div className="comment-body">
      {comment.body}
    </div>
  </div>
);

export default Comment;
