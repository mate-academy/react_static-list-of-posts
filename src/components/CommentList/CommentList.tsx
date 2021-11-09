import React from 'react';
import { Comment } from '../../types/type';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="posts__comments comments">
    {
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    }
  </ul>
);
