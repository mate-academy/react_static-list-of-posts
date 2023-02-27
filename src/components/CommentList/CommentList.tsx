import React from 'react';
import { CommentType } from '../../types/CommentType';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comment: CommentType[],
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    {comment.map(item => (
      <CommentInfo key={item.id} comment={item} />
    ))}
  </div>
);
