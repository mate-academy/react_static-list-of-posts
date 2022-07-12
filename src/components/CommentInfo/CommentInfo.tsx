import React from 'react';
import { Comment } from '../../type';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <>
      <p className="commentName" data-cy="comment-name">
        {comment.name}
      </p>

      <p className="commentBody" data-cy="comment-body">
        {comment.body}
      </p>

      <p className="comment__Email" data-cy="comment-email">
        {comment.email}
      </p>
    </>
  </div>
);
