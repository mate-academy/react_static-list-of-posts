import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Prop = {
  comments: Comment[]
};

export const CommentList: React.FC<Prop> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
