import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comment: Comment;
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    <CommentInfo comment={comment} />
  </div>
);
