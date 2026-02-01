import React from 'react';
import { CommentsType } from '../../types/CommentsType';

type Props = {
  comment: CommentsType;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>
        <span> by </span>
        <a className="CommentInfo__email" href={`mailto:` + comment.email}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
