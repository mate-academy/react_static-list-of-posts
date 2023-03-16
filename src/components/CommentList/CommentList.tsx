import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comment: Comment;
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    <CommentInfo comment={comment} key={comment.id} />
  </div>
);
