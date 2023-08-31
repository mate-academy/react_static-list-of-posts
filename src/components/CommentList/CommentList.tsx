import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => {
  const commentList = comments.map(comment => {
    return (
      <CommentInfo comment={comment} key={comment.id} />
    );
  });

  return <div className="CommentList">{commentList}</div>;
};
