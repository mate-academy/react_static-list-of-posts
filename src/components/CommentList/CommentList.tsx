import React from 'react';
import { Comment } from '../../types/api.types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListProp = {
  comments: Comment[] | []
};

export const CommentList: React.FC<CommentListProp> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => <CommentInfo comment={comment} />)}
    </div>
  );
};
