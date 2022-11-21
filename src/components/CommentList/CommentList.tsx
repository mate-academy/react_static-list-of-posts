import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </>
  );
};
