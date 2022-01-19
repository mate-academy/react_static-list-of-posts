import React from 'react';
import './CommentInfo.scss';

export const CommentInfo: React.FC<PostComment> = ({ name, email, body }) => (
  <div className="box">
    <p>{name}</p>
    <p>{email}</p>
    <p>{body}</p>
  </div>
);
