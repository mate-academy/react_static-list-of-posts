import React from 'react';
import { Comment } from '../../types/Comment';

type Props = Pick<Comment, 'name' | 'body' | 'email'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{body}</div>
      <div>{email}</div>
    </div>
  );
};
