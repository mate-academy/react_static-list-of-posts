import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} commentInfo={comment} />
      ))}
    </div>
  );
};
