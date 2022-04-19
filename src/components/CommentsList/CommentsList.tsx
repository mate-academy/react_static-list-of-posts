import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentsList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment-list" data-cy="comments-list">
    {comments.map(comment => (
      <li className="comment-list__comment" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
