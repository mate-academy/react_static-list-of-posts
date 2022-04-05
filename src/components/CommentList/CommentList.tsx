import React from 'react';
import './CommentList.scss';
import { Comment } from '../types';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <div className="comments__title">Comments</div>
    <ul className="comments__list" data-cy="comments-list">
      {comments.map(comment => (
        <li key={comment.id} className="comments__item">
          <CommentInfo {...comment} />
        </li>
      ))}
    </ul>
  </div>
);
