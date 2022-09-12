import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type CommentType = {
  comments: Comments[];
};

export const CommentList: React.FC<CommentType> = ({ comments }) => (
  <div className="CommentList">
    {comments
      .map(comment => <CommentInfo key={comment.postId} comment={comment} />)}
  </div>
);
