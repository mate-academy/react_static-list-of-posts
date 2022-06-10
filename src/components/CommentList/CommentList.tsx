import React from 'react';
import './CommentList.scss';
import { CommentListProps } from '../../types/CommentListProps';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li className="comments__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
