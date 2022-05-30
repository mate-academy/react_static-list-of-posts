import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

type Props = {
  coment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ coment }) => (
  <div className="comment">
    <h3 className="comment__title">
      {coment.name}
    </h3>

    <p className="comment__info">
      {coment.body}
    </p>

    <a href="mailto:#" className="comment__email">
      {coment.email}
    </a>
  </div>
);
