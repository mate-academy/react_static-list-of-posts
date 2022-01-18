import React from 'react';
import { CommentInfo } from './CommentInfo';

interface Props {
  comments: CommentToPost[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="card card-content">
    Comments:
    {comments.map(comment => <CommentInfo key={comment.id} comment={comment} />)}
  </ul>
);
