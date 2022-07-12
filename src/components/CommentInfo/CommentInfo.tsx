import React from 'react';
import { Comment } from '../../Types/Comment';
// import { Post } from '../../Types/Post';

import './CommentInfo.scss';

type Props = {
  comments: Comment[];
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <ol className="card__list">
    <h3 className="card__comments">Comments:</h3>
    {comments.map(comment => (
      <li key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.body}</p>
        <a href="mailto:{comments.email}">{comment.email}</a>
      </li>
    ))}
  </ol>
);
