import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: CommentToPost[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="card card-content">
    Comments:
    {comments.map(comment => <CommentInfo comment={comment} />)}
  </ul>
);
