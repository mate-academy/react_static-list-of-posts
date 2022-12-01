import React from 'react';

import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';
import { Comments } from '../types/Comments';

type Prop = {
  comments: Comments[]
};

export const CommentList: React.FC<Prop> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </ul>
);
