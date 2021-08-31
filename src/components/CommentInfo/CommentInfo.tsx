import React from 'react';

import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <p className="comment__title">
        <strong>
          Title:
        </strong>
        {` ${name}`}
      </p>

      <p className="comment__email">
        <strong>
          Email:
        </strong>
        {` ${email}`}
      </p>

      <p className="comment__subject">
        <strong>
          Subject:
        </strong>
        {` ${body}`}
      </p>
    </div>
  );
};
