import React from 'react';

import { CommentType } from '../../Types/CommentType';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: CommentType[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
