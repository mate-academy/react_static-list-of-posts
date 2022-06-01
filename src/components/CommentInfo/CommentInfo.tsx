import React from 'react';
import { Comments } from '../../app.typedefs';

import './CommentInfo.scss';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <li data-cy="comment-name">{`Comment name: ${comment.name}`}</li>
    <li data-cy="comment-body">{`Comment body: ${comment.body}`}</li>
    <li data-cy="comment-email">{`Comment email: ${comment.email}`}</li>
  </>
);
