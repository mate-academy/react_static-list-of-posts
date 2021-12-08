import React from 'react';
import { Comment } from '../Types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="comment_block">
      <hr />
      {comments.map((comment) => {
        return (
          <CommentInfo key={comment.id} comment={comment} />
        );
      })}
      <hr />
    </div>
  );
};
