import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = props => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
      <div>{body}</div>
    </>
  );
};
