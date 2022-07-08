import React from 'react';
import { Comment } from '../../type/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <p className="card-footer">
    <div className="content">
      <p className="card-content">
        <strong data-cy="comment-name">{comment.name}</strong>
        <br />
        <small data-cy="comment-email">{comment.email}</small>
        <p>{comment.body}</p>
      </p>
    </div>
  </p>
);
