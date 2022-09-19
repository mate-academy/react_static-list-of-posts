import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';
import { Comment } from '../../types/Comment';

interface CommentsListProps {
  comments: Array<Comment>;
}


export const CommentList: React.FC<CommentsListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
