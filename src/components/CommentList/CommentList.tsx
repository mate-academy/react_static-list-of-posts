import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type TypeComments = {
  comment: Comment;
};

export const CommentList: React.FC<TypeComments> = ({ comment }) => (
  <div className="CommentInfo">
    <CommentInfo comment={comment} />
  </div>
);
