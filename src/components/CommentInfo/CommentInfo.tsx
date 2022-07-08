import React from 'react';
import { Post } from '../../Types/Post';

import './CommentInfo.scss';

type Props = {
  comment: Post;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <ol className="card__list">
    <h3 className="card__comments">Comments:</h3>
    {comment.comment.map(comments => (
      <li key={comments.id}>
        <h3>{comments.name}</h3>
        <p>{comments.body}</p>
        <a href="mailto:{comments.email}">{comments.email}</a>
      </li>
    ))}
  </ol>
);
