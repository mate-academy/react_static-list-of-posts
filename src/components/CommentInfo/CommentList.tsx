import React from 'react';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div className="comments__body" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </>
);
