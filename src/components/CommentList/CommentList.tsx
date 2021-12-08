import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList:React.FC<Props> = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
