import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <h3 className="comments__title">Comments:</h3>
    <ul className="comments__list">
      {comments.map(comment => (
        <li key={comment.id} className="comments__list-item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
