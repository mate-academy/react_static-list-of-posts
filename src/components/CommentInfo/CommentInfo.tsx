import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__title">{comment.name}</h3>
    <p className="comment__text">{comment.body}</p>
    <p className="comment__mail">{comment.email}</p>
  </div>
);
