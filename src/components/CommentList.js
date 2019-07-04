import React from 'react';
import Comment from './Comment';

function CommentList( {comment} ) {
  return (
    <>
      <Comment comment={comment} />
    </>
  );
}

export default CommentList;
