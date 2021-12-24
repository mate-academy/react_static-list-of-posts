import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comment: Comment[],
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul>
    <h4>Comments:</h4>
    <CommentInfo comment={comment} />
  </ul>
);
