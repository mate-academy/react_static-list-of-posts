import React from 'react';
import './CommentList.scss';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments__list">
    {comments.map(comment => (
      <li className="comments__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
