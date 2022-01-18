import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Commentt[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li key={comment.id} className="comments__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
