import React from 'react';

import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, body, email,
  } = comment;

  return (
    <div className="Comment">
      <h4 className="Comment__name">{name}</h4>
      <p className="Comment__text">{body}</p>
      <p className="Comment__email">{email}</p>
    </div>
  );
};
