import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="commentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </ul>
  );
};
