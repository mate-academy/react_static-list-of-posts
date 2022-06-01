import React from 'react';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}
export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </ul>
);
