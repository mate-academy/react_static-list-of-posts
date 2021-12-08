import React from 'react';

import { Comment } from '../../interfaces/Comment';
import './CommentInfo.scss';

type Props = Omit<Comment, 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <li className="post__comment">
    <div className="post__body">{body}</div>
    <div className="post__name">{name}</div>
    <a href="mailto:{email}">{email}</a>
  </li>
);
