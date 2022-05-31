import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  currentComment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ currentComment }) => (
  <div className="CommentInfo">
    <span className="CommentInfo__description">Comment name:</span>
    <p>{currentComment.name}</p>
    <span className="CommentInfo__description">Comment:</span>
    <p>{currentComment.body}</p>
    <span className="CommentInfo__description">Commentator email:</span>
    <p>{currentComment.email}</p>
  </div>
);
