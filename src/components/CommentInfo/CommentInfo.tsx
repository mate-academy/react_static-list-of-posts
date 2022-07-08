import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <article className="commentAbout">
    <div className="commentAbout__name" data-cy="comment-name">
      {comment.name}
    </div>

    <div className="commentAbout__body" data-cy="comment-body">
      {comment.body}
    </div>

    <div className="commentAbout__email" data-cy="comment-email">
      {comment.email}
    </div>
  </article>
);
