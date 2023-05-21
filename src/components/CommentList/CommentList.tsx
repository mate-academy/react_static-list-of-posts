import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../api/types/comments';

interface CommentListProps {
  comments: Comment[];
}
export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments
        .map(comment => <CommentInfo comment={comment} key={comment.id} />)}
    </div>
  );
};
