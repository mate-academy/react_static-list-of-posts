import React from 'react';

import { Comment } from '../../app.typedef';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <h5 data-cy="comment-name" className="comment__name">{comment.name}</h5>
    <h6 data-cy="comment-email" className="comment__email">{comment.email}</h6>
    <p data-cy="comment-body">{comment.body}</p>
  </div>
);
