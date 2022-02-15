import React from 'react';
import './CommentsInfo.scss';

type Props = {
  name:string;
  body:string;
  email:string;
};

export const CommentsInfo:React.FC<Props> = ({ name, body, email }) => (
  <div className="posts__comments comments">
    <p className="comments__name">{name}</p>
    <p className="comments__body">{body}</p>
    <p className="comments__email">{email}</p>
  </div>
);
