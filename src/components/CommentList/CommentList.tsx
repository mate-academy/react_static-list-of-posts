import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<{ commentListComments: Comment[] }> = ({
  commentListComments,
}) => {
  return (
    <div className="CommentList">
      {commentListComments.map(comment => (
        <CommentInfo key={comment.id} commentInfoComment={comment} />
      ))}
    </div>
  );
};
