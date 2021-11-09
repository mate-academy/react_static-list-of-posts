import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="comment-info__item">
    <p className="comment-info__name">{comment.name}</p>
    <p>{comment.body}</p>
    <p className="comment-info__email">{comment.email}</p>
  </li>
);
