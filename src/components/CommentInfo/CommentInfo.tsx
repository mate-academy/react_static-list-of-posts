import React from 'react';
import { Comment } from '../../types/Coments';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, email, body,
  } = comment;

  return (
    <li className="comments__text">
      <div className="comment">
        <h3 className="comment__name" data-cy="comment-name">
          {name}
        </h3>
        <a href={`mailto:${email}`} className="comment__email" data-cy="comment-email">
          {email}
        </a>
        <p className="comment__text" data-cy="comment-body">
          {body}
        </p>
      </div>
    </li>
  );
};
