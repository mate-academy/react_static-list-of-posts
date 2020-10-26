import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  comments.map(comment => <Comment key={comment.id} {...comment} />)
);

export default CommentList;
