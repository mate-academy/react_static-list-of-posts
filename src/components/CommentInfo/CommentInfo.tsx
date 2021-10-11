import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p className="comment__title">{comment.name}</p>
    <p className="comment__body">{comment.body}</p>
    <p className="comment__email">{comment.email}</p>
  </>
);
