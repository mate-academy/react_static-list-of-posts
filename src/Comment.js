import React from 'react';
import comments from './api/comments';

const Comment = () => (
  <h3 className="headers">
    {comments.name}
  </h3>
);

export default Comment;
