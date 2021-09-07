import React from 'react';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments__container">
    {comments.map(comment => (
      <div className="comments__body" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
