import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <>
      <h4>{name}</h4>
      <div>{body}</div>
      <div>{email}</div>
    </>
  );
};
