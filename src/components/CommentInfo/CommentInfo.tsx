import React from 'react';
import { Comment } from '../../react-app-env';


interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="box message">
    <h1
      className="
        message-header
        has-text-grey-lighter
        is-uppercase
      "
      data-cy="comment-name"
    >
      {comment.name}
    </h1>
    <p className="message-body" data-cy="comment-body">{comment.body}</p>

    <a
      data-cy="comment-email"
      className="
        is-link
        message-body
        has-text-link
      "
      href={`mailto: ${comment.email}`}
    >
      {comment.email}
    </a>
  </div>
);
