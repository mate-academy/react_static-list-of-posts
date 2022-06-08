import React from 'react';
import { Comment } from '../../app.typedef';

import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="comment-info">
      <h3 data-cy="comment-name">
        {name}
      </h3>
      <ul className="comment-info__list">
        <li data-cy="comment-body">
          {body}
        </li>
        <li className="comment-info__email" data-cy="comment-email">
          {email}
        </li>
      </ul>
    </div>
  );
};
