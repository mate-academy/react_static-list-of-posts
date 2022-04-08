import React from 'react';
import './CommentInfo.scss';

import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <ul className="comments posts__comments">
    {comments.map(comment => (
      <li
        className="comment comments__comment"
        key={comment.id}
      >
        <h3 className="comment__name">
          {comment.name}
        </h3>
        <p className="comment__body">
          {comment.body}
        </p>
        <a href={comment.email} className="comment__email">
          {comment.email}
        </a>
      </li>
    ))}
  </ul>
);
