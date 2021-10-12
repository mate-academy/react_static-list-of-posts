import React from 'react';
import { Comment } from '../types/Post';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list">
    Comments:
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </ul>
);
