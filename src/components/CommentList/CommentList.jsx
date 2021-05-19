import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => <Comment {...comment} key={comment.id}/>)}
  </ul>
);

export default CommentList;