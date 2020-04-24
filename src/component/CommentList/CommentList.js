import React from 'react';
import './CommentList.css';
import Comment from '../Сomment/Comment';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
