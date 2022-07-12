import React from 'react';
import { PostComment } from '../../types/types';

type Props = {
  comment : PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="commentsList__item" key={comment.id}>
    <p>{comment.email}</p>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
  </li>
);
