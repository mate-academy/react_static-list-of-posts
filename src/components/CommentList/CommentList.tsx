import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';

type TypeCommentList = {
  comments: Comments[],
};

export const CommentList: React.FC<TypeCommentList> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => <CommentInfo comment={comment} />)}
  </div>
);
