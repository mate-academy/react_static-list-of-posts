import React from 'react';
import { Comment } from '../../types/comments';

type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comments }) => {
  const { name, email, body } = comments;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>
        {' by '}
        <a className="CommentInfo__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};
