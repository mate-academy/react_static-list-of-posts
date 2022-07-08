import React from 'react';

import './CommentInfo.scss';

export interface Comment {
  name: string,
  body: string,
}

type Props = {
  comments: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="comment">
    <div
      className="comment-name"
      data-cy="comment-name"
    >
      {comments.name}
    </div>
    <div
      className="comment-body"
      data-cy="comment-body"
    >
      {comments.body}
    </div>
  </div>
);
