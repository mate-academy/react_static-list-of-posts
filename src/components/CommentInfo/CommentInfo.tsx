import React from 'react';
import { Comments } from '../../app.typedefs';

import './CommentInfo.scss';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p data-cy="comment-name">
      {`Comment name: ${comment.name}`}
    </p>

    <p data-cy="comment-body">
      {`Comment body: ${comment.body}`}
    </p>

    <p data-cy="comment-email">
      {`Comment email: ${comment.email}`}
    </p>
  </div>
);
