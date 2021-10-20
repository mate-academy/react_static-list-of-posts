import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../Comment-Info/Comment-info';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = props => {
  const { comments } = props;

  return (
    <>
      Comments:
      {comments.map((comment: Comment) => (
        <div key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
      <br />
    </>
  );
};
