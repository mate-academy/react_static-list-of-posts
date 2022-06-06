import React from 'react';
import './CommentList.scss';
import { Comments } from '../../types';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comments[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments-list" data-cy="comment-list">
    {comments.map(comment => {
      return (
        <li key={comment.id} className="comments-list__item">
          <CommentInfo comment={comment} />
        </li>
      );
    })}
  </ul>
);
