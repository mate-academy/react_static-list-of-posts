import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentsList.scss';

type Props = {
  comments: Comment[];
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
