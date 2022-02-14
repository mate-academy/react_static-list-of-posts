import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/comment';

type Props = {
  comments: Comment[],
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <ul className="commentInfo">
    {comments.map((comment: Comment) => (
      <li key={comment.id} className="commentInfo__item">
        {'* '}
        <span className="commentInfo__name">{comment.name}</span>
        {' - | - '}
        <a href={`mailto:${comment.email}`} className="commentInfo__mail">{comment.email}</a>
        <br />
        <span className="commentInfo__body">{comment.body}</span>
      </li>
    ))}
  </ul>
);
