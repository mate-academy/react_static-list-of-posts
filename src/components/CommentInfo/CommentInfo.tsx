import React from 'react';
import { Comment } from '../../types';

type Props = {
  data: Comment;
};
export const CommentInfo: React.FC<Props> = ({ data: comment }) => (
  <li className="comment-item" key={comment.id}>
    {`Comment email: ${comment.email}`}
  </li>
);
