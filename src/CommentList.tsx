import React from 'react';
import { Comment } from './types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  commentsBox: Comment[],
};

export const CommentList: React.FC<Props> = ({ commentsBox }) => {
  return (
    <>
      {commentsBox.map(comment => {
        return (
          <CommentInfo comment={comment} />
        );
      })}
    </>
  );
};
