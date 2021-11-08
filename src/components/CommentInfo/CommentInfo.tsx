import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC <Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <li className="CommentInfo">
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </li>
  );
};
