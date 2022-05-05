import React from 'react';
import './CommentInfo.scss';

import { Comment } from '../../types/Comment';

interface Props {
  props: Comment,
}

export const CommentInfo: React.FC<Props> = ({ props }) => (
  <>
    <p className="comment__name" data-cy="comment-name">{props.name}</p>
    <p className="comment__email" data-cy="comment-email">{props.email}</p>
    <p className="comment__body" data-cy="comment-body">{props.body}</p>
  </>
);
