import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="comments__comment comment" key={comment.id}>
    <div className="comment__user user">
      <p className="user__name" data-cy="comment-name">
        {comment.name}
      </p>

      <p className="user__email" data-cy="comment-email">
        {comment.email}
      </p>
    </div>

    <p className="comment__body" data-cy="comment-body">
      {comment.body}
    </p>
  </li>
);
