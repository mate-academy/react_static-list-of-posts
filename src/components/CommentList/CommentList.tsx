import React from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul data-cy="comments-list" className="commentList">
    {comments.map(comment => (
      <li key={comment.id} className="commentList__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
