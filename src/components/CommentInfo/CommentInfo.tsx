import React from 'react';
import { Comment } from '../../types/comments';

interface CommentInfoProps {
  comment: Comment;
}
export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
 comment ? (
 <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      {`by ${comment.email}` }

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
      {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </div>) : null
);



