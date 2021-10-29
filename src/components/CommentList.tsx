import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    <h3 className="comments">Comments:</h3>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
