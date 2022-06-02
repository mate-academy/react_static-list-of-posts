import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="comment_list-item rounded">
    <h5 data-cy="comment-name">{comment.name}</h5>
    <p data-cy="comment-body">{comment.body}</p>
    <a data-cy="comment-email" href={comment.email}>{comment.email}</a>
  </li>
);
