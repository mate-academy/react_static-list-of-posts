import React from 'react';

import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = ({ comment }) => (
  <>
    <h4>{comment.name}</h4>
    <div>{comment.body}</div>
    <div><strong>{comment.email}</strong></div>
  </>
);
