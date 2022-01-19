import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: CommentInfo,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <h3 className="comment">
    <div className="comment__name">{comment.name}</div>
    <div className="comment__body">{comment.body}</div>
    <div className="comment__email">{comment.email}</div>
  </h3>
);
