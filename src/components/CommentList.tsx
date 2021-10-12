import React from 'react';
import { CommentInfo } from './CommentInfo';
import { CommentType } from '../types/CommentType';

type Props = {
  comments: CommentType[];
};

export const CommentList: React.FC<Props> = props => {
  const { comments } = props;

  return (
    <div className="comments">
      <span className="comments__title">Comments</span>

      {comments.map(comment => (
        <div className="comments__comment" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  );
};
