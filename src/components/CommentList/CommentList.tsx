import React from 'react';

import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comments__text">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
