import React from 'react';
import './CommentInfo.scss';
import { PostComment } from '../../appTypeDefs';

interface CommentInfoProps {
  comment: PostComment;
}

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <>
    <small>{`Post ID ${comment.postId}`}</small>
    <h4>{`Comment: ${comment.name}`}</h4>
    <h4>{`Email: ${comment.email}`}</h4>
    <p>{comment.body}</p>
  </>
);
