import React from 'react';
import './CommentInfo.scss';

export const CommentInfo: React.FC<PostComment> = ({ name, email, body }) => (
  <>
    <li>{name}</li>
    <li>{email}</li>
    <li>{body}</li>
  </>
);
