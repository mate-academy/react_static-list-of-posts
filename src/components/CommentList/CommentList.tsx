import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC <CommentsProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
