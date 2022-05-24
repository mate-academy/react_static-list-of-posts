import React from 'react';

import { Comments } from '../../types/Comments';
import './CommentInfo.scss';

type Props = {
  commentInfo: Comments;
};

export const CommentInfo: React.FC<Props> = ({ commentInfo }) => (
  <div className="commentInfo">
    <div
      className="commentInfo__name"
      data-cy="comment-name"
    >
      {commentInfo.name}
    </div>
    <div
      className="commentInfo__email"
      data-cy="comment-email"
    >
      {commentInfo.email}
    </div>
    <p
      className="commentInfo__text"
      data-cy="comment-body"
    >
      {commentInfo.body}
    </p>
  </div>
);
