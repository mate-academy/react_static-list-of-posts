import React from 'react';
import './CommentInfo.scss';

export type Props = {
  name: string,
  text: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, text, email }) => (
  <div className="commentInfo">
    <div className="commentInfo__name">{name}</div>
    <div className="commentInfo__text">{text}</div>
    <div className="commentInfo__email">{email}</div>
  </div>
);
