import React from 'react';
import { Comment } from '../../Types/Comment';

type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;
  const { name, body, email } = comments;

  return (
    <>
      <h4>{name}</h4>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
};
