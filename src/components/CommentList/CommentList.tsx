import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type CommentListProps = {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment => <CommentInfo key={comment.id} comment={comment}/>))}
  </div>
);
