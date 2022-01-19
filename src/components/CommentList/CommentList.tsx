import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: CommentInfo[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentsList">
    {comments.map(comment => (
      <li key={comment.id} className="commentsList__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
