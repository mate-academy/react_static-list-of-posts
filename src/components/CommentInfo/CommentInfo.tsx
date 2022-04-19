import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <h3
      className="comment-info__title"
      data-cy="comment-name"
    >
      {comment.name}
    </h3>

    <span
      className="comment-info__user-info"
      data-cy="comment-email"
    >
      <i className="fa fa-envelope" />
      {' '}
      <a href={`mailto: ${comment.email}`}>
        {comment.email}
      </a>

    </span>

    <p
      className="comment-info__body"
      data-cy="comment-body"
    >
      {comment.body}
    </p>
  </div>
);
