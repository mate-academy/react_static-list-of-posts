import React from 'react';
import './CommentInfo.scss';

export const CommentInfo: React.FC<PostComment> = ({
  name,
  body,
  email,
}) => (
  <div className="comment-info">
    <p className="comment-info__name">{name}</p>
    <p>{body}</p>
    <p className="comment-info_email">{`email: ${email}`}</p>
  </div>
);
