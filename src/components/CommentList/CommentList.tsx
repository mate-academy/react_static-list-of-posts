import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface CommentListProps {
  commentList: Comment[]
}

export const CommentList: React.FC<CommentListProps> = ({
  commentList,
}) => (
  <div className="CommentList">
    {commentList.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
