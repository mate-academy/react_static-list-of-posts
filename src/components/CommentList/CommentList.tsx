import React from 'react';
import './CommentList.scss';

import { Comment } from '../../interfaces/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <CommentInfo comment={comment} />
    ))}
  </>
);
