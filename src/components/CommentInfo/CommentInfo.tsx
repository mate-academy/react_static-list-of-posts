import React from 'react';
import { Comment } from '../../Types/Types';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = ({ comment }) => (
  <div>
    <h4>{comment.name}</h4>
    {' - '}
    <a href={comment.email}>{comment.email}</a>
    <p>{comment.body}</p>
  </div>
);
