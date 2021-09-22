import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = props => {
  const { comments } = props;

  return (
    <>
      <strong>Comments:</strong>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
      <br />
    </>
  );
};
