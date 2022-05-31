import React from 'react';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="notification">
    <h5>{comment.name}</h5>
    <p>{comment.body}</p>
    <a href="email">{comment.email}</a>
  </div>
);
