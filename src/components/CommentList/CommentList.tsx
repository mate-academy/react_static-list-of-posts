import React from 'react';
import './CommentList.scss';
import { Comment } from '../../Types/Types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </ul>
);
