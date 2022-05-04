import React from 'react';
import { Comment } from './types/Comment';

type Props = {
  comments: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <>
    <div className="comment__name">{`Name: ${comments.name}`}</div>
    <div className="comment__email">{`Email: ${comments.email}`}</div>
    <div className="comment__body">{comments.body}</div>
  </>

);
