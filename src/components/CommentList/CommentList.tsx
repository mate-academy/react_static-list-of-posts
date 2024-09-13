import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<{ comments: Comment[] }> = ({
  comments,
}) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
