import React from 'react';
import { Comment } from '../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="Comment">
    <h3 className="Comment__name">{comment.name}</h3>
    <div className="Comment__body">{comment.body}</div>
    <h4 className="Comment__email">{comment.email}</h4>
  </div>
);
