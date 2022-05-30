import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

type Props = {
  coment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ coment }) => (
  <div className="comment">
    <h3 className="comment__title" data-cy="comment-name">
      {coment.name}
    </h3>

    <p className="comment__info" data-cy="comment-body">
      {coment.body}
    </p>

    <a href="mailto:#" className="comment__email" data-cy="comment-email">
      {coment.email}
    </a>
  </div>
);
