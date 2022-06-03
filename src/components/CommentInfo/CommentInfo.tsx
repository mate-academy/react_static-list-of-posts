import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 data-cy="comment__name">
      {`Comment: ${comment.name}`}
    </h3>
    <p data-cy="comment__body">{comment.body}</p>
    <p data-cy="comment__email">{comment.email}</p>
  </>
);
