import React from 'react';
import comments from '../api/comments';
import { Comment } from './Comment';

export const CommentList = postID => (
  <ul>
    {comments.map(comment => (comment.postId === postID.id
      ? (
        <li key={comment.id}>

          <Comment {...comment} />
        </li>
      ) : null
    ))}
  </ul>
);
