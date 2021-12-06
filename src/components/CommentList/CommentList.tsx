import React from 'react';

import { Comment } from '../../types/comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList:React.FC<Props> = ({ comments }) => {
  return (
    <div className="post__comments comments">
      {comments.map((comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
