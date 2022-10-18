import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { CommentsInfoType } from '../../types/comments';

export const CommentList: React.FC<CommentsInfoType> = ({ comments }) => {
  return (
    <ul className="CommentList">
      {comments.map(comment => (
        <CommentInfo {...comment} />
      ))}
    </ul>
  );
};
