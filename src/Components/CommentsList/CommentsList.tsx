import React from 'react';
import { Comment } from '../../type/Comment';
import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <ul className="comments__list">
    { comments.map(({
      email,
      name,
      body,
    }) => (
      <li className="post__main main">
        <div className="main__name">{name}</div>
        <div className="main__email">{email}</div>
        <div className="main__text">{body}</div>
      </li>
    ))}
  </ul>
);
