import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    comments.map(comment => <Comment key={comment.id} {...comment} />)
  );
}

export default CommentList;
