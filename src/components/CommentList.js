import React from 'react';
import './comment-list.scss';
import Comment from './Comment';

const CommentList = ({ comment }) => (
  comment.map(comment => (
    <div className="comment-list" key={comment.id}>
      <Comment commentData={comment} />
    </div>
  ))
);

export default CommentList;
