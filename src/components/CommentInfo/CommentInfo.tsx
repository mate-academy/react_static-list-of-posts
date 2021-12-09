import React from 'react';

import { Comment } from '../../interfaces/Comment';
import './CommentInfo.scss';

type Props = Omit<Comment, 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <li className="post__comment">
    <div className="post__comment-user">
      <img className="post__image" src="./images/user2.png" alt="avatar" />
      <div className="post__name">{name}</div>
      <a className="post__email" href="mailto:{email}">{email}</a>
    </div>
    <div className="post__comment-body">{body}</div>
  </li>
);
