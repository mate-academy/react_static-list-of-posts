import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListProps = {
  comments: Comment[],
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments
        .map(comment => <CommentInfo key={comment.id} comment={comment} />)}
    </div>
  );
};
