import React from 'react';
import { Comment } from '../../../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<{ comment: Comment }> = ({ comment }) => (
  <div className="CommentInfo">
    <h3 className="CommentInfo-Name">{comment.name}</h3>
    <p className="CommentInfo-Body">{comment.body}</p>
    <div className="CommentInfo-Email">{comment.email.toLocaleLowerCase()}</div>
  </div>
);
