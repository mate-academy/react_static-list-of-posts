import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

export const CommentInfo: React.FC<Comment> = ({
  name,
  body,
  email,
}) => (
  <div className="CommentInfo">
    <span className="CommentInfo__name">{name}</span>
    <p className="CommentInfo__desk">{body}</p>
    <a href={`mailto:${email}`} className="CommentInfo__email">{email}</a>
  </div>
);
