import React from 'react';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ commentList }) => (
  commentList.map(comment => (
    <li key={comment.id} className="comment">
      <Comment {...comment} />
    </li>
  ))
);
