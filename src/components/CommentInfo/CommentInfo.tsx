import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo comment">
      <div className="content">
        <a href={`mailto:${email}`} className="CommentInfo__name author">{name}</a>
        <div className="metadata">
          <a href={`mailto:${email}`} className="CommentInfo__email date">{email}</a>
        </div>
        <p className="CommentInfo__body">{body}</p>
      </div>
    </div>
  );
};
