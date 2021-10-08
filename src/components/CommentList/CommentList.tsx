import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="comment-list">
      {comments.map(comment => (
        <li className="comment-list__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
