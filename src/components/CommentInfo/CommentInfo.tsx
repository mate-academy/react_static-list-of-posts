import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <li className="comments__comment comment">
      <div className="comment__user user">
        <p className="user__name" data-cy="comment-name">
          {name}
        </p>

        <p className="user__email" data-cy="comment-email">
          {email}
        </p>
      </div>

      <p className="comment__body" data-cy="comment-body">
        {body}
      </p>
    </li>
  );
};
