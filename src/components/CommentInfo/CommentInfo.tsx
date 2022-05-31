import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  currentComment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ currentComment }) => (
  <div className="CommentInfo">
    <span className="CommentInfo__description">Comment name:</span>
    <p data-cy="comment-name">{currentComment.name}</p>
    <span className="CommentInfo__description">Comment:</span>
    <p data-cy="comment-body">{currentComment.body}</p>
    <span className="CommentInfo__description">Commentator email:</span>
    <p data-cy="comment-email">{currentComment.email}</p>
  </div>
);
