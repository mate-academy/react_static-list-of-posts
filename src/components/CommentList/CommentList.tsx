import React from 'react';

import { Comment } from '../../types/commentType';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map((comment) => {
        return <CommentInfo comment={comment} key={comment.id} />;
      })}
    </div>
  );
};
