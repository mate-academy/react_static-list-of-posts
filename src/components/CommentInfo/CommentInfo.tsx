import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentsInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <>
      <h4 className="owner">{name}</h4>
      <p className="owner-email">{email}</p>
      <p className="comment-description">{body}</p>
    </>
  );
};
