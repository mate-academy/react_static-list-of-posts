import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p>{`Name: ${comment.name}`}</p>
    <p>{`Email: ${comment.email}`}</p>
    <p>{comment.body}</p>
  </>
);
