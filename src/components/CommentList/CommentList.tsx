import React from 'react';
import './CommentList.scss';
import { Comment } from '../../react-app-env';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments__box">
    {comments.map((comment: Comment) => (
      <React.Fragment key={comment.id}>
        {comments.length === 0
          ? 'No comments'
          : <CommentInfo comment={comment} />}
      </React.Fragment>
    ))}
  </div>
);

// 1. The `CommentInfo` accepts a `comment` object and renders a `name`, a `body`, and an `email`.
//    - Please, add `data-cy="comment-name"`, `data-cy="comment-body"`, and
//    `data-cy="comment-email"` attributes to `name`, `body` and `email` elements.
