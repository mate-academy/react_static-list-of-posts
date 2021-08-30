import React from 'react';
import { Comment } from '../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Partial<Comment>> = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <p className="comment__name">{name}</p>
    <p>{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);
