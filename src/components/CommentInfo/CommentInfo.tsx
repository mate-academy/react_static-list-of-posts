import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <h4 className="comment-info__name">
      {comment.name}
    </h4>
    <p className="comment-info__body">
      {comment.body}
    </p>
    <a href="https://www.google.com/" className="comment-info__email">
      {comment.email}
    </a>
  </div>
);
