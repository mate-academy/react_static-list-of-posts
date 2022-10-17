import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { CommentsInfoType } from '../../types/comments';

export const CommentList: React.FC<CommentsInfoType> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <div
          className="CommentInfo"
          key={comment.id}
        >
          <CommentInfo {...comment} />
        </div>
      ))}
    </div>
  );
};
