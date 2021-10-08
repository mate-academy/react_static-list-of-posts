import React from 'react';
import { Comment } from '../../types/Comment';

interface Props {
  commentItem: Comment;
}

export const CommentInfo: React.FC<Props> = (props) => {
  const { commentItem } = props;
  const { name, email, body } = commentItem;

  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
      <div>{body}</div>
    </>
  );
};
