import React from 'react';
import Comment from '../comment/Comment';

const CommentList = ({ comments }) => (
  <h3 className="border border-dark rounded bg-info">Comments
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))
    }
  </h3>
);

export default CommentList;
