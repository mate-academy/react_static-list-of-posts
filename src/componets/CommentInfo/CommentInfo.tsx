import React from 'react';
import { Comments } from '../../types/types';

import './CommentInfo.scss';

type Props = {
  comment: Comments
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="post-comment__user">
      <div className="post-comment__avatar">{comment.email.slice(0, 1)}</div>
      <div className="post-comment__email">{comment.email}</div>
    </div>
    <h3 className="post-comment__name">{comment.name}</h3>
    <p className="post-comment__body">{comment.body}</p>
  </>
);
