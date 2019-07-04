import React from 'react';
import comments from '../api/comments';
import Comment from './Comment';

function CommentList(props) {
  return (
    <>
      {comments
        .filter(comment => comment.id === props.comment.id)
        .map(comment => (
          <Comment comment={comment} />
        ))}
    </>
  );
}

export default CommentList;
