import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentList">
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
