import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comment: Comment;
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul className="CommentList" style={{ listStyleType: 'none' }}>
    <CommentInfo comment={comment} />
  </ul>
);
