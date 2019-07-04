import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <>
      <Comment comment={props.comment} />
    </>
  );
}

export default CommentList;
