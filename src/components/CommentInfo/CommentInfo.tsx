import React from 'react';
import { CommentType } from '../../types/CommentType';
import './CommentInfo.scss';

type Props = {
  comment: CommentType | null,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <p className="email">
    Email:
    {' '}
    <span data-cy="comment-email">{comment?.email}</span>
    <br />
    Name:
    {' '}
    <span data-cy="comment-name" className="email__name">{comment?.name}</span>
  </p>
);
