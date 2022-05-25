import React from 'react';
import { Comments } from '../../types/Comments';
import './CommentInfo.scss';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <>
      <p className="comments__content" data-cy="comment-name">
        {`Name: ${comment.name}`}
      </p>
      <p className="comments__content" data-cy="comment-body">
        {comment.body}
      </p>
      <p className="comments__content" data-cy="comment-email">
        {`Email: ${comment.email}`}
      </p>
    </>
  );
};
