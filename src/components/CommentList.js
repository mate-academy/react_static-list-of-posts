import React from 'react';
import Comment from './Comment';

function CommentList( {comment} ) {
  return (
    <>
      <Comment commentData={comment} />
    </>
  );
}

export default CommentList;
