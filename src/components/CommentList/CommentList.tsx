import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments">
    <p className="comments__title">Comments:</p>
    <ul className="comments__list" data-cy="comments-list">
      {comments.map(comment => (
        <li key={comment.id} className="comments__item">
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        </li>
      ))}
    </ul>
  </div>
);
