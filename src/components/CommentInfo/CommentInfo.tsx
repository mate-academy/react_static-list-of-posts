import React from 'react';
import { Comment } from '../types/Comment';
import './CommentInfo.scss';

type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <>
    <h3 className="comment__name">{comments.name}</h3>
    {' - '}
    <span className="comment__email">{comments.email}</span>
    <p className="comment__body">{comments.body}</p>
  </>
);
