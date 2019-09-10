import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => <Comment data={comment} />)}
  </div>
);

export default CommentList;
