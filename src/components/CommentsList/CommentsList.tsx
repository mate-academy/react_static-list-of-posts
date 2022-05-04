import React from 'react';

import { Comment } from '../../types/Comment';

import { CommentInfo } from '../CommentInfo';

import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList:React.FC<Props> = ({ comments }) => (
  <div className="post__comments comments">
    <div className="comments__title">Comments:</div>
    <ul
      className="comments__list"
      data-cy="comments-list"
    >
      {comments.map((comment: Comment) => (
        <li key={comment.id} className="comments__item">
          <CommentInfo
            comment={comment}
          />
        </li>
      ))}
    </ul>
  </div>
);
