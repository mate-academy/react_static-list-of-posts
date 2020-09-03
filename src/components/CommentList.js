import React from 'react';

import comments from '../api/comments';
import Comment from './Comment';

function CommentList({ postId }) {
  return (
    comments.map(comment => (
      comment.postId === postId
        ? (
          <Comment
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ) : null
    ))
  );
}

export default CommentList;
