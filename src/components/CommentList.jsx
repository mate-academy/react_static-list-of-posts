import React from 'react';
import Comment from './Comment';

function CommentList({ postId, comments }) {
  const FilterComments = comments.filter(comment => comment.postId === postId);

  return (FilterComments.map(comment => <Comment key= {comment.id} comment={comment} />)
  );
}

export default CommentList;
