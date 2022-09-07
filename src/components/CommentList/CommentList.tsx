import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </>
);
