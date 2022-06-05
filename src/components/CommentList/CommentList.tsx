import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../react-app-env';
import './CommentList.scss';

interface Props {
  comment: Comment | undefined;
}

export const CommentList: React.FC<Props> = ({ comment }) => (
  <CommentInfo comment={comment} />
);
