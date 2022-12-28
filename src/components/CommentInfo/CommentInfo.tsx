import React from 'react';

import { Comment } from '../Types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href="mailto:Telly_Lynch@karl.co.uk">
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
