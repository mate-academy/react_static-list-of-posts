import React from 'react';
import { Comment } from '../../../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<{ comment: Comment }> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="CommentInfo">
      <h3 className="CommentInfo-Name">{name}</h3>
      <p className="CommentInfo-Body">{body}</p>
      <div className="CommentInfo-Email">{email.toLocaleLowerCase()}</div>
    </div>
  );
};
