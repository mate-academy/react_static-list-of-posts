import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <>
      <h3 className="comment__name">
        {comment.name}
      </h3>

      <div className="comment__body">
        {comment.body}
      </div>

      <a href="true" className="comment__email">
        {comment.email}
      </a>
    </>
  );
};
