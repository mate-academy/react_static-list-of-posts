import React from 'react';
import './CommentInfo.scss';
import { PostComment } from '../../appTypeDefs';

interface CommentInfoProps {
  comment: PostComment;
}

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <>
    <h5 data-cy="comment-name">{`Comment: ${comment.name}`}</h5>
    <h5 data-cy="comment-email">{`Email: ${comment.email}`}</h5>
    <p data-cy="comment-body">{comment.body}</p>
  </>
);
