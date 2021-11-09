import React from 'react';
import { Comment } from '../../types/type';

interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="comments__item">
    <div className="comments__message">
      <h3 className="comments__title">{comment.name}</h3>
      <p className="comments__text">{comment.body}</p>
    </div>
    <a href={`mailto:${comment.email}`} className="comments__link link">
      {comment.email}
    </a>
  </li>
);
