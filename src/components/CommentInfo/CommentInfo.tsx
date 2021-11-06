import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="CommentInfo">
      <h4 className="CommentInfo__name">{name}</h4>
      <p className="CommentInfo__text">{body}</p>
      <p className="CommentInfo__email">{email}</p>
    </div>
  );
};
