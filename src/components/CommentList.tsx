import React from 'react';
import CommentInterface from '../types/CommentInterface';
import { CommentListType } from '../types/CommentListType';
import { CommentInfo } from './CommentInfo';

export const CommentList: React.FC<CommentListType> = ({ commentsList }) => (
  <ul className="CommentList">
    {commentsList.map((comment: CommentInterface) => (
      <CommentInfo {...comment} key={comment.id} />
    ))}
  </ul>
);
