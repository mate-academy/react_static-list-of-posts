import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="comment">
      <h4 className="comment__title">
        {name}
      </h4>
      <div className="comment__text">
        {body}
      </div>
      <div className="comment__email">
        {email}
      </div>
    </div>
  );
};
