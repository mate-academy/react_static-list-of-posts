import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        <p>
          <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
            {`by ${comment.email}`}
          </a>
        </p>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
