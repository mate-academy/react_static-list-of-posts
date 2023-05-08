import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../../types/Comment';
import './CommentList.scss';

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    ))}
  </div>
);
