import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = (props) => (
  <ul>
    {props.comment.map(comment => (
      <Comment comment={comment} />
    ))}
  </ul>
);

export default CommentList;
