import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export interface CommentListProps {
  comments: Comment[],
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  </>
);
