import React from 'react';
import { Comment } from '../App';

const CommentItem: React.FC<{ comment: Comment; }> = ({ comment }) => (
  <div className="post__comments">
    <div className="post__comments-user">
      <strong>{'Email: '}</strong>
      {comment.email}
    </div>
    <div className="post__comments-text">
      <div className="post__comments-text-title">
        {comment.name}
      </div>
      <div>
        {comment.body}
      </div>
    </div>
  </div>
);

export default CommentItem;
