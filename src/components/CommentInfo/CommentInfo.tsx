import React from 'react';
import { Comment } from '../../types/Comment';

interface Props {
  comment: Comment,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <ul className="CommentInfo">
    <li className="CommentInfo__name">{comment.name}</li>
    <li className="CommentInfo__body">{comment.body}</li>
    <li className="CommentInfo__email">{comment.email}</li>
  </ul>
);
