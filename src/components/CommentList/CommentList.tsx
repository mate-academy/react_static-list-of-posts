import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';

type TypeCommentList = {
  comments: Comments[],
};

export const CommentList: React.FC<TypeCommentList> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments
        .map(comment => <CommentInfo comment={comment} key={comment.id} />)}
    </div>
  );
};
