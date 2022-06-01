import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <li className="comment-list__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
