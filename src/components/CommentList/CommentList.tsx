import React from 'react';
import { CommentType } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

interface CommentListPropsType {
  comments: CommentType[];
}

export const CommentList: React.FC<CommentListPropsType> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
