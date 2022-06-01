import React from 'react';
import { Comments } from '../../app.typedefs';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comment: Comments;
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul>
    <CommentInfo comment={comment} />
  </ul>
);
