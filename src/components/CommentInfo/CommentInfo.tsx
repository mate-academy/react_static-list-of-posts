import React from 'react';
import { Comment } from '../../api/types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentArea">
    <div data-cy="comment-name" className="commentName">
      {comment.name}
    </div>
    <div data-cy="comment-body" className="commentMail">
      {comment.body}
    </div>
    <div data-cy="comment-email" className="commentMail">
      {comment.email}
    </div>
  </div>
);
