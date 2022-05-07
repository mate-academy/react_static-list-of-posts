import React from 'react';
import { Comment } from '../../types/interfaces';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <ul className="comment-info">
    <li
      className="comment-info__name"
      data-cy="comment-name"
    >
      {comment && `Name: ${comment.name}`}
    </li>
    <li
      className="comment-info__body"
      data-cy="comment-body"
    >
      {comment && `Body: ${comment.body}`}
    </li>
    <li
      // className="comment-info__name"
      data-cy="comment-email"
    >
      {comment && <a href={`${comment.email}`}>{comment.email}</a>}
    </li>
  </ul>
);
