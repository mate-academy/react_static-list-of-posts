import React from 'react';
import { Comment } from './types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, body, email, id,
  } = comment;

  return (
    <ul key={id}>
      <li>{body}</li>
      <li>{`Name: ${name}`}</li>
      <li>{`Email: ${email}`}</li>
    </ul>
  );
};
