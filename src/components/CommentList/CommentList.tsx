import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list" data-cy="comment-list">
    { comments.map(comment => (
      <li key={comment.id} className="comment-list__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
