import React from 'react';
import { Comment } from '../../Types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3
      data-cy="comment-name" 
      className="commentInfo__name"
    >
      {comment.name}
    </h3>
    <div
      data-cy="comment-body"
      className="commentInfo__body"
    >
      {comment.body}
    </div>
    <a
      data-cy="comment-email" 
      className="commentInfo__email" 
      href={`malito:${comment.email}`}
    >
      {comment.email}
    </a>
  </>
);
