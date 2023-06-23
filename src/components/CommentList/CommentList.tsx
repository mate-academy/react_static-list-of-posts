import React from 'react';

import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/comment';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment: Comment) => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
