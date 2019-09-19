import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </>
);

export default CommentList;
