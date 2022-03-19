import React from 'react';
import { Comment } from '../types/Comment';
import { UserInfo } from './UserInfo';

type Props = Comment;

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <UserInfo name={name} email={email} />
    <div className="comment__body">{body}</div>
  </div>
);
