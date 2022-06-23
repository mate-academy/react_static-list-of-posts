import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/interfaces';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 data-cy="comment-name">{ comment.name }</h3>
    <p data-cy="comment-body">{ comment.body }</p>
    <a href="email" data-cy="comment-email">{ comment.email }</a>
  </>
);

export default CommentInfo;
