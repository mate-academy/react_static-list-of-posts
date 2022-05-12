import React from 'react';
import { Comment } from './types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment__name">{`Name: ${comment.name}`}</div>
    <div className="comment__email">{`Email: ${comment.email}`}</div>
    <div className="comment__body">{comment.body}</div>
  </>

);
